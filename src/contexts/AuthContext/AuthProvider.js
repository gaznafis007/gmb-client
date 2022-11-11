import React, { createContext } from "react";
import { app } from "../../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const value = { registerUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
