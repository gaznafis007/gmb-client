import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    <h3 className="text-4xl text-center">Loading...</h3>;
  }
  if (user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
