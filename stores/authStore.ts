import { getCurrentUser, login, register } from "@/api/auth";
import {
  LoginRequest,
  RegisterCredentials,
  UserData,
} from "@/types/auth/AuthTypes";
import { create } from "zustand";

type authState = {
  user: UserData | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (loginData: LoginRequest) => Promise<UserData | null>;
  register: (registerData: RegisterCredentials) => Promise<string | void>;
  validateAuth: () => Promise<void>;
  logout: () => void;
  clearError: () => void;
};

const useAuthStore = create<authState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  login: async (loginData) => {
    set({ isLoading: true, error: null });
    try {
      const user = await login(loginData);
      set({ user, isAuthenticated: true });
      return user;
    } catch (error) {
      set({ error: "Login failed. Please check your credentials." });
      return null;
    } finally {
      set({ isLoading: false });
    }
  },
  register: async (registerData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await register(registerData);
      return response.message;
    } catch (error) {
      set({
        isLoading: false,
        error: "Registration failed. Please try again.",
      });
    } finally {
      set({ isLoading: false });
    }
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  },
  clearError: () => {
    set({ error: null });
  },
  validateAuth: async () => {
    set({ isLoading: true, error: null });
    try {
      const user = await getCurrentUser();
      set({ user, isAuthenticated: true });
    } catch (error) {
      set({ user: null, isAuthenticated: false });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useAuthStore;
