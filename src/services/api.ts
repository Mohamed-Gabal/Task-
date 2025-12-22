import axios from "axios";
import { toast } from "react-toastify";

const baseURL = "https://tinytales.trendline.marketing/api";

export const api = axios.create({
  baseURL,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
      return Promise.reject(error);
    }
  }
);
