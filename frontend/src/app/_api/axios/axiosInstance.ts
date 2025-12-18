import axios from 'axios';

const baseURL = 'http://localhost:8080/';

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
export const userApi = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => {
    response.data = response.data;
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
