import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, requiredRole }) => {
  const isAuthenticated = !!sessionStorage.getItem('auth');
  const userRole = sessionStorage.getItem('role');
  const routeRole = userRole?.split("_")[1].toLowerCase();

  return !isAuthenticated ? (
    <Navigate to="/login" />
  ) : requiredRole && userRole !== requiredRole ? (
    <Navigate to={`/${routeRole}`} />
  ) : (
    <Component />
  );
};

export default ProtectedRoute;