import type { ReactNode } from 'react';
import { useLocation } from 'react-router';
import { Navigate } from 'react-router';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  const token = localStorage.getItem('mctl_token');

  const isAuthenticated = Boolean(token);
  const isAuthPage = location.pathname.startsWith('/auth');

  // ❌ Not logged in → redirect to login
  if (!isAuthenticated && !isAuthPage) {
    return <Navigate to='/auth/login' replace state={{ from: location }} />;
  }

  // ✅ Logged in but trying to access login/register
  if (isAuthenticated && isAuthPage) {
    return <Navigate to='/' replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
