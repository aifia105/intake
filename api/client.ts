import { ApiError } from "@/types/api/ApiTypes";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import {
  clearTokens,
  getAccessToken,
  getRefreshToken,
  setTokens,
} from "./tokenStore";

const API = axios.create({
  baseURL: process.env.BACKEND_URL || "",
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

let isRefreshing = false;
let failedQueue: {
  resolve: (token: string) => void;
  reject: (error: unknown) => void;
}[] = [];

const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token!);
    }
  });
  failedQueue = [];
};

API.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ApiError>) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: (token: string) => {
              originalRequest.headers.Authorization = `Bearer ${token}`;
              resolve(API(originalRequest));
            },
            reject,
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const currentRefreshToken = await getRefreshToken();
        if (!currentRefreshToken) {
          throw new Error("No refresh token available");
        }

        const { data } = await axios.post<{
          accessToken: string;
          refreshToken: string;
        }>(
          `${process.env.BACKEND_URL || ""}/auth/refresh`,
          { refreshToken: currentRefreshToken },
          { withCredentials: true },
        );

        await setTokens(data.accessToken, data.refreshToken);
        processQueue(null, data.accessToken);

        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return API(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError, null);
        await clearTokens();
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    if (error.response?.data?.error) {
      const apiError = error.response.data.error;
      console.error(`API Error [${apiError.code}]:`, apiError.message);
      if (apiError.details) {
        console.error("Details:", apiError.details);
      }
    } else {
      console.error("Network or unknown error:", error.message);
    }
    return Promise.reject(error);
  },
);

export default API;
