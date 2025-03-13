import axiosInstance from './axiosConfig';

export interface UserCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends UserCredentials {
  name: string;
}

export interface UserData {
  _id: string;
  name: string;
  email: string;
}

// Login user and return user data
export const loginUser = async (credentials: UserCredentials): Promise<UserData> => {
  try {
    const response = await axiosInstance.post('/api/users/auth', credentials);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Register a new user
export const registerUser = async (userData: RegisterData): Promise<UserData> => {
  try {
    const response = await axiosInstance.post('/api/users', userData);
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

// Logout user
export const logoutUser = async (): Promise<{ message: string }> => {
  try {
    const response = await axiosInstance.post('/api/users/logout');
    return response.data;
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

// Get current user profile
export const getCurrentUser = async (): Promise<UserData> => {
  try {
    const response = await axiosInstance.get('/api/users/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

// Update user profile
export const updateUserProfile = async (userData: Partial<UserData & { password?: string }>): Promise<UserData> => {
  try {
    const response = await axiosInstance.put('/api/users/profile', userData);
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
}; 