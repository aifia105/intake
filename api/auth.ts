import {
  LoginRequest,
  LoginResponse,
  RegisterCredentials,
  RegisterResponse,
  UserData,
} from "@/types/auth/AuthTypes";
import API from "./client";
import { clearTokens, getRefreshToken, setTokens } from "./tokenStore";

export const register = async (
  registerData: RegisterCredentials,
): Promise<RegisterResponse> => {
  const response = await API.post<RegisterResponse>(
    "/auth/register",
    registerData,
  );
  return response.data;
};

export const login = async (loginData: LoginRequest): Promise<UserData> => {
  const response = await API.post<LoginResponse>("/auth/login", loginData);
  const { accessToken, refreshToken, user } = response.data;
  await setTokens(accessToken, refreshToken);
  return user;
};

export const getCurrentUser = async (): Promise<UserData> => {
  const response = await API.get<UserData>("/auth/me");
  return response.data;
};

export const refreshAccessToken = async (): Promise<void> => {
  const currentRefreshToken = await getRefreshToken();
  if (!currentRefreshToken) {
    throw new Error("No refresh token available");
  }
  const response = await API.post<{
    accessToken: string;
    refreshToken: string;
  }>("/auth/refresh", { refreshToken: currentRefreshToken });
  await setTokens(response.data.accessToken, response.data.refreshToken);
};

export const logout = async (): Promise<void> => {
  await clearTokens();
};
