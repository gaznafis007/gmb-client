import React, { createContext } from "react";
import { app } from "../../Firebase/firebase.config";
import { getAuth } from "firebase/auth";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const value = {};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
