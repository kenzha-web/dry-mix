import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../utils/url";

export const getPosts = createAsyncThunk("/posts/getPosts", async ({ page, limit }, thunkAPI) => {
  try {
    const res = await axios.get(`${BASE_URL}/posts?page=${page}&limit=${limit}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const createPosts = createAsyncThunk("/posts/createPosts", async (postData, thunkAPI) => {
  try {
    const token = localStorage.getItem("accessToken"); // Получаем токен
    if (!token) {
      return thunkAPI.rejectWithValue("Access token is missing");
    }

    const res = await axios.post(`${BASE_URL}/posts`, postData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const deletePosts = createAsyncThunk("/posts/deletePosts", async (postId, thunkAPI) => {
  try {
    const token = localStorage.getItem("accessToken"); // Получаем токен
    if (!token) {
      return thunkAPI.rejectWithValue("Access token is missing");
    }

    await axios.delete(`${BASE_URL}/posts/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Добавляем токен в заголовок
      },
    });
    return postId;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    filtered: [],
    isLoading: false,
    createError: null,
    deleteError: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.list = action.payload.posts;
        state.isLoading = false;
      })
      .addCase(getPosts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createPosts.pending, (state) => {
        state.isLoading = true;
        state.createError = null;
      })
      .addCase(createPosts.fulfilled, (state, action) => {
        state.list.push(action.payload.posts);
        state.isLoading = false;
      })
      .addCase(createPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.createError = action.payload;
      })
      .addCase(deletePosts.pending, (state) => {
        state.isLoading = true;
        state.deleteError = null;
      })
      .addCase(deletePosts.fulfilled, (state, action) => {
        state.list = state.list.filter((post) => post.id !== action.payload);
        state.isLoading = false;
      })
      .addCase(deletePosts.rejected, (state, action) => {
        state.isLoading = false;
        state.deleteError = action.payload;
      });
  },
});

export default postsSlice.reducer;
