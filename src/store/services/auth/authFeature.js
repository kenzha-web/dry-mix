import axiosInstance from "../../../utils/axiosInstance";
import { BASE_URL } from "../../../utils/url";

export const AUTH_URL = `${BASE_URL}/auth/`;
export const REGISTRATION_URL = `${BASE_URL}/`;

const register = async (userData) => {
  const response = await axiosInstance.post(`${REGISTRATION_URL}users`, userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axiosInstance.post(`${AUTH_URL}sign-in`, userData);

  return response.data;
};

const refresh = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) throw new Error("Refresh token is missing");

  const response = await axiosInstance.post(`${AUTH_URL}refresh-token`, {
    refreshToken,
  });

  const { accessToken, refreshToken: newRefreshToken } = response.data;

  // Сохраняем обновлённые токены
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", newRefreshToken);

  return response.data;
};

const logout = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  const accessToken = localStorage.getItem("accessToken");

  try {
    const response = await axiosInstance.post(
      `${AUTH_URL}logout`,
      { refreshToken },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data.message;
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error("Unauthorized: Unable to logout");
    }
    throw error;
  }
};

const authService = {
  register,
  login,
  refresh,
  logout,
};

export default authService;
