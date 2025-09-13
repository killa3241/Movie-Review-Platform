import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL,
});

// Use a request interceptor to add the authentication token to all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['x-auth-token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;