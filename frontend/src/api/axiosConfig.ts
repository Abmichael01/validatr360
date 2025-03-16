import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://validatr360.onrender.com';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // This is important for cookies/JWT to work cross-domain
});

// Add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error codes here if needed
    if (error.response && error.response.status === 401) {
      // Handle unauthorized access
      console.error('Unauthorized access, redirecting to login');
      // Redirect logic can be implemented here or through a store
    }
    return Promise.reject(error);
  }
);

export default axiosInstance; 