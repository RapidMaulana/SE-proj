"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [auth, setAuth] = useState(false); // "authorized" | "unregistered"
  const [user, setUser] = useState(null); // info user dari payload token
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        // Decode token (JWT payload)
        const payload = JSON.parse(atob(token.split(".")[1]));
        const isExpired = payload.exp * 1000 < Date.now();

        console.log("Token payload:", payload);

        if (!isExpired) {
          setAuth(true);
          setUser(payload); // Simpan data user dari token
        } else {
          console.warn("Token expired");
          logout(); // Hapus token otomatis
        }
      } catch (error) {
        console.error("Invalid token:", error);
        logout();
      }
    } else {
      setAuth(false);
    }

    setLoading(false);
  }, []);

  // Function untuk login manual
  const login = (token) => {
    try {
      localStorage.setItem("token", token);
      const payload = JSON.parse(atob(token.split(".")[1]));
      setAuth(true);
      setUser(payload);
    } catch (error) {
      console.error("Failed to decode token:", error);
      setAuth(false);
    }
  };

  // Function logout
  const logout = () => {
    localStorage.removeItem("token");
    setAuth(false);
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
