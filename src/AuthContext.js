// src/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { setClientToken, loginEndpoint } from './spotify';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    let token = null;

    if (hash) {
      token = hash.split("&")[0].split("=")[1];
      console.log("Token obtained from URL hash:", token);
    }

    if (token) {
      setToken(token);
      setClientToken(token);
      console.log("Token set in state and API client:", token);
      console.log(token);
    } else {
      console.log("No token found, redirecting to login...");
      window.location.href = loginEndpoint;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token }}>
      {children}
    </AuthContext.Provider>
  );
};

