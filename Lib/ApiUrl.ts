import axios, { type AxiosInstance } from "axios";

export const API: AxiosInstance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
});

API.interceptors.request.use(
  (config) => {
    config.headers["x-cg-demo-api-key"] = import.meta.env.VITE_MY_API_KEY;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
