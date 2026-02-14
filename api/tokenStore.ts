import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

let memoryAccessToken: string | null = null;
let memoryRefreshToken: string | null = null;

export const getAccessToken = async (): Promise<string | null> => {
  if (Platform.OS === "web") {
    return memoryAccessToken;
  }
  return await SecureStore.getItemAsync(ACCESS_TOKEN_KEY);
};

export const getRefreshToken = async (): Promise<string | null> => {
  if (Platform.OS === "web") {
    return memoryRefreshToken;
  }
  return await SecureStore.getItemAsync(REFRESH_TOKEN_KEY);
};

export const setTokens = async (
  accessToken: string,
  refreshToken: string,
): Promise<void> => {
  if (Platform.OS === "web") {
    memoryAccessToken = accessToken;
    memoryRefreshToken = refreshToken;
    return;
  }
  await SecureStore.setItemAsync(ACCESS_TOKEN_KEY, accessToken);
  await SecureStore.setItemAsync(REFRESH_TOKEN_KEY, refreshToken);
};

export const clearTokens = async (): Promise<void> => {
  if (Platform.OS === "web") {
    memoryAccessToken = null;
    memoryRefreshToken = null;
    return;
  }
  await SecureStore.deleteItemAsync(ACCESS_TOKEN_KEY);
  await SecureStore.deleteItemAsync(REFRESH_TOKEN_KEY);
};
