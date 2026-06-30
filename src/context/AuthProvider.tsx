import { useState, type ReactNode } from "react";
import type { UserData } from "../types/UserData";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(() => {
    if (typeof window === "undefined") return null;

    const storedUser = localStorage.getItem("userSession");
    if (storedUser) {
      try {
        return JSON.parse(storedUser);
      } catch {
        localStorage.removeItem("userSession");
      }
    }
    return null;
  });

  const login = (userData: UserData) => {
    localStorage.setItem("userSession", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("userSession");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
