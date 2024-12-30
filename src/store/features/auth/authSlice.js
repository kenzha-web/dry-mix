// src/store/features/auth/authSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../services/auth/authFeature";
import { toast } from "react-toastify";
import { parseJwt } from "../../../utils/jwtUtils";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const checkAuth = createAsyncThunk("auth/loadUserOnRefresh", async (_, thunkApi) => {
  try {
    let accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      const decoded = parseJwt(accessToken);
      const currentTime = Date.now() / 1000; // в секундах
      if (decoded.exp && decoded.exp < currentTime) {
        // Если токен истёк, обновляем его
        const refreshResponse = await thunkApi.dispatch(refresh()).unwrap();
        accessToken = refreshResponse.accessToken;
      }

      const user = {
        userId: decoded.userId,
        role: decoded.role,
      };
      return { user };
    } else {
      return thunkApi.rejectWithValue("No token found");
    }
  } catch (error) {
    return thunkApi.rejectWithValue("Failed to load user from localStorage");
  }
});

export const register = createAsyncThunk("auth/register", async (userData, thunkApi) => {
  try {
    const response = await authService.register(userData);
    // Можете сохранять в localStorage, если надо
    return response;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      error.toString();
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const login = createAsyncThunk("auth/login", async (userData, thunkApi) => {
  try {
    const { accessToken, refreshToken } = await authService.login(userData);

    const decoded = parseJwt(accessToken);

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    return {
      accessToken,
      refreshToken,
      user: {
        userId: decoded.userId,
        role: decoded.role, // Или другое поле
      },
    };
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      error.toString();
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkApi) => {
  try {
    const data = await authService.refresh();
    const { accessToken, refreshToken } = data;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    const decoded = parseJwt(accessToken);

    return {
      accessToken,
      refreshToken,
      user: {
        userId: decoded.userId,
        role: decoded.role,
      },
    };
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      error.toString();
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");
    let accessToken = localStorage.getItem("accessToken");
    const decoded = parseJwt(accessToken);
    const currentTime = Date.now() / 1000;
    if (decoded.exp && decoded.exp < currentTime) {
      try {
        const refreshResponse = await thunkApi.dispatch(refresh()).unwrap();
        accessToken = refreshResponse.accessToken;
      } catch (refreshError) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        return thunkApi.rejectWithValue("Failed to refresh token during logout");
      }
    }

    await authService.logout();
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || error.message || error.toString();
    return thunkApi.rejectWithValue(errorMessage);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET(state) {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.user = null;
      });
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      toast.error(action.payload);
    });

    // login
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload.user;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      toast.error(action.payload);
    });

    // refresh
    builder.addCase(refresh.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(refresh.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload.user;
    });
    builder.addCase(refresh.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    // logout
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = null;
      toast.success("Logged out successfully");
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload || "Logout failed. Try again.";
      toast.error(action.payload || "Logout failed. Try again.");
    });
  },
});

export const { RESET } = authSlice.actions;
export default authSlice.reducer;
