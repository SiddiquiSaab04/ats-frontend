import axios from "axios";

const AxiosInstance = axios.create({
  baseURL:"http://localhost:4000/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

AxiosInstance.interceptors.request.use(  
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized! Redirecting to login...');
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default AxiosInstance;
