import React from 'react';
import { useAuthStore } from '@/stores/authStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const AuthDebug: React.FC = () => {
  const { user, isAuthenticated, logout, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleTestLogout = async () => {
    await logout();
    navigate('/auth/login');
  };

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Authentication Debug</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <strong>Authentication Status:</strong> {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
          </div>
          <div>
            <strong>Loading:</strong> {isLoading ? 'Loading...' : 'Not Loading'}
          </div>
          <div>
            <strong>User:</strong> {user ? JSON.stringify(user) : 'No user data'}
          </div>
          <Button onClick={handleTestLogout} className="mt-4">
            Test Logout
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuthDebug; 