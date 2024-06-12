import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, allowedRoles, ...rest }) => {
  const isAuthenticated = () => {
    const roleName = localStorage.getItem("roleName");
    return roleName !== null && roleName !== undefined && roleName !== "";
  };

  const userRole = localStorage.getItem("roleName");

  return (
    <Route
      {...rest}
      element={
        isAuthenticated() && allowedRoles.includes(userRole) ? (
          <Component />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

export default ProtectedRoute;
