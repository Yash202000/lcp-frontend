import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/Authcontext';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout: React.FC<ProtectedLayoutProps> = ({ children }) => {
  const { isAuthenticated, loading, user } = useAuth();

  console.log('ProtectedLayout - isAuthenticated:', isAuthenticated);
  console.log('ProtectedLayout - loading:', loading);
  console.log('ProtectedLayout - user:', user);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while checking authentication
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedLayout;
