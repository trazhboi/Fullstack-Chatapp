import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://fullstack-chatapp-production-f44b.up.railway.app/api",
  withCredentials: true,
});
