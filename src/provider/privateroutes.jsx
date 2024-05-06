import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './authprovider';


function PrivateRoutes({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  return (
    user ? children : <Navigate to="/sign-in" state={{ from: location }} replace />
  );
}

export default PrivateRoutes;