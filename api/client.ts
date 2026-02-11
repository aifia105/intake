import { ApiError } from "@/types/api/ApiTypes";
import axios, { AxiosError } from "axios";

const API = axios.create({
  baseURL: process.env.BACKEND_URL || "",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  (config) => {
    // TODO: Add authentication token when auth is implemented
    // const token = getAuthToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiError>) => {
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
