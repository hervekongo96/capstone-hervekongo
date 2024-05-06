import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './authprovider';

function GuestRoute({ children }) {
  const { user } = useAuth();

  return (
    user ? <Navigate to="/dashboard" replace /> : children
  );
}

export default GuestRoute;