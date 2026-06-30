import { createContext } from "react";
import type { UserData } from "../types/UserData";
interface AuthContextType {
  user: UserData | null;
  login: (userData: UserData) => void;
  logout: () => void;
  isAuthenticated: boolean;
}
export const AuthContext = createContext<AuthContextType | null>(null);
