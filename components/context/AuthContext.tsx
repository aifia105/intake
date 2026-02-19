import { getCurrentUser } from "@/api/auth";
import { getAccessToken } from "@/api/tokenStore";
import { authState } from "@/stores/authStore";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext<authState>({} as authState);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<authState | null>(null);

  useEffect(() => {
    const bootstrap = async () => {
      try {
        const token = await getAccessToken();
        if (token) {
          const userData = await getCurrentUser();
          setAuthState({
            user: userData,
            isAuthenticated: true,
            isLoading: false,
            error: null,
            login: authState!.login,
            register: authState!.register,
            validateAuth: authState!.validateAuth,
            logout: authState!.logout,
            clearError: authState!.clearError,
          });
        }
      } catch (error) {
        setAuthState(null);
      } finally {
        setAuthState((prev) => ({
          ...prev!,
          isLoading: false,
        }));
      }
    };
    bootstrap();
  }, []);

  return (
    <AuthContext.Provider value={authState!}>{children}</AuthContext.Provider>
  );
}
