import axios from "axios";
import {store} from "../store/store";
import {logout, refresh} from "../store/features/auth/authSlice";
import { toast } from "react-toastify";

const axiosInstance = axios.create({

});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const originalRequest = error.config;
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        try {
          await store.dispatch(refresh());
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          store.dispatch(logout());
          throw refreshError;
        }
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
