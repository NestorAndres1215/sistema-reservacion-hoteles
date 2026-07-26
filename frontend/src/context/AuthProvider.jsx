import { useState } from "react";
import api from "../api/axios";
import { AuthContext } from "./AuthContext";
import { isTokenExpired } from "../utils/jwt";

function getStoredUser() {
  try {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (token && savedUser && !isTokenExpired(token)) {
      return JSON.parse(savedUser);
    }

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  } catch {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
  return null;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser);
  const [loading] = useState(false);

  const login = async (credentials) => {
    const { data } = await api.post("/auth/login", credentials);
    const userData = { username: data.username, rol: data.rol };

    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);

    return userData;
  };

  const register = async (userData) => {
    const { data } = await api.post("/auth/register", userData);
    return data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  const hasRole = (roles) => {
    if (!user) return false;
    if (!roles || roles.length === 0) return true;
    return roles.includes(user.rol);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, logout, hasRole }}
    >
      {children}
    </AuthContext.Provider>
  );
}