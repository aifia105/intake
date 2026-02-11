import {
  LoginRequest,
  RegisterCredentials,
  RegisterResponse,
  UserData,
} from "@/types/auth/AuthTypes";
import API from "./client";

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
  const response = await API.post<UserData>("/auth/login", loginData);
  return response.data;
};

export const getCurrentUser = async (): Promise<UserData> => {
  try {
    const response = await API.get<UserData>("/auth/me");
    return response.data;
  } catch (error) {
    throw error;
  }
};
