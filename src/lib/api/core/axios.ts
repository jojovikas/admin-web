
import { appConfig } from "@/src/config/app";
import axios from "axios";


export const axiosInstance = axios.create({
  baseURL: appConfig.apiUrl,

  withCredentials: true,

  timeout: 30000,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});