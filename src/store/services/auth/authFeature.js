import axios from "axios";
import {BASE_URL} from "../../../utils/url";

export const AUTH_URL = `${BASE_URL}/users/`;

const register = async(userData) => {
  const response = await axios.post(AUTH_URL + "register", userData);
  return response.data;
}

const login = async(userData) => {
  const response = await axios.post(AUTH_URL + "login", userData);
  return response.data;
}

const logout = async() => {
  const response = await axios.get(AUTH_URL + "logout");
  return response.data.message;
}

const getLogInStatus = async() => {
  const response = await axios.get(AUTH_URL + "loggedin");
  return response.data;
}

const authService = {
  register,
  login,
  logout,
  getLogInStatus,
}

export default authService;
