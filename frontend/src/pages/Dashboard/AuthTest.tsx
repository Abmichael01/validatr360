import React from 'react';
import { useAuthStore } from '@/stores/authStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertDescription } from '@/components/ui/alert';

export const AuthTest = () => {
  const { user, isAuthenticated, logout, isLoading, checkAuth, error } = useAuthStore();
  const navigate = useNavigate();
  const [testResult, setTestResult] = React.useState<string | null>(null);

  const handleTestLogout = async () => {
    try {
      await logout();
      setTestResult('Logout successful, redirecting to login...');
      setTimeout(() => {
        navigate('/auth/login');
      }, 2000);
    } catch (error: any) {
      setTestResult(`Logout error: ${error.message}`);
    }
  };

  const handleCheckAuth = async () => {
    try {
      await checkAuth();
      setTestResult('Auth check completed');
    } catch (error: any) {
      setTestResult(`Auth check error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Authentication Test Page</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Authentication Status</CardTitle>
          <CardDescription>Current state of authentication</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <strong>Authenticated:</strong> {isAuthenticated ? 'Yes' : 'No'}
          </div>
          <div>
            <strong>Loading:</strong> {isLoading ? 'Yes' : 'No'}
          </div>
          <div>
            <strong>User:</strong> {user ? JSON.stringify(user) : 'No user data'}
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {testResult && (
            <Alert>
              <AlertDescription>{testResult}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="space-x-4">
          <Button onClick={handleCheckAuth}>
            Check Auth
          </Button>
          <Button variant="destructive" onClick={handleTestLogout}>
            Test Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthTest; 