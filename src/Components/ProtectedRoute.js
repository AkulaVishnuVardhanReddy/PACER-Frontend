// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, requiredRole }) => {
  const isAuthenticated = !!sessionStorage.getItem('auth'); 
  const userRole = sessionStorage.getItem('role');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  const routeRole = userRole.split("_")[1].toLowerCase();
  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to={`/${routeRole}`} />; 
  }

  return <Component />;
};

export default ProtectedRoute;
