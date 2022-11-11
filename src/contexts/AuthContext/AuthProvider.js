import React, { createContext, useEffect, useState } from "react";
import { app } from "../../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const getProfile = (usrname) => {
    return updateProfile(auth.currentUser, {
      displayName: usrname,
    });
  };
  const googleSignIn = (googleProvider) => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  const value = {
    user,
    loading,
    setLoading,
    registerUser,
    login,
    getProfile,
    googleSignIn,
    logOut,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (user === null) {
        setUser(currentUser);
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
