import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import authService from "../../services/auth/authFeature";
import {toast} from "react-toastify";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  users: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const register = createAsyncThunk("auth/register", async(userData, thunkApi) => {
  try {
    const response = await authService.register(userData);
    localStorage.setItem("user", JSON.stringify(response));
  } catch (error) {
    const errorMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error;
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const login = createAsyncThunk("auth/logout", async(_, thunkApi) => {
  try {
    await authService.logout();
    localStorage.removeItem("user");
  } catch (error) {
    const errorMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error;
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const logout = createAsyncThunk("auth/login", async(userData, thunkApi) => {
  try {
    const response = await authService.login(userData);
    localStorage.setItem("user", JSON.stringify(response));
  } catch (error) {
    const errorMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error;
    return thunkApi.rejectWithValue(errorMessage);
  }
})

export const getLogInStatus = createAsyncThunk("auth/status", async(_, thunkApi) => {
  try {
    return await authService.getLogInStatus();
  } catch (error) {
    const errorMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error;
    return thunkApi.rejectWithValue(errorMessage);
  }
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    RESET(state) {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        toast.error(action.payload);
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
        toast.error(action.payload);
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.user = null;
        toast.success(action.payload);
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getLogInStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLogInStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = action.payload;
      })
      .addCase(getLogInStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
  }
});

export const { RESET } = authSlice.actions;

export default authSlice.reducer;
