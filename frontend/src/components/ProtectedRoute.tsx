import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading, checkAuth } = useAuthStore();
  const location = useLocation();
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    // Only check authentication once when component mounts
    if (!isAuthenticated && !hasChecked) {
      checkAuth().finally(() => {
        setHasChecked(true);
      });
    } else {
      setHasChecked(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Show loading state while checking authentication
  if (isLoading || !hasChecked) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // Render the protected content
  return <Outlet />;
}; 