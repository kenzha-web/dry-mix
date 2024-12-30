import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../../utils/url";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (id, thunkApi) => {
    try {
      const response =  await axios(`${BASE_URL}/comments`)
      return response.data.result;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const sendComment = createAsyncThunk(
  "comments/sendComment",
  async (data, thunkApi) => {
    try {
      const response = await axios.post(`${BASE_URL}/comments`, { name: data });
      return response.data.result; // вернём созданный объект
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const initialState = {
  comments: [],
  count: 0,
  newCommentId: "",
  waiting: false,
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.pending, (state) => {
      state.waiting = true;
      state.error = null;
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      state.waiting = false;
      state.error = null;
      // action.payload = response.data.result
      const { items, count } = action.payload;
      state.comments = items;
      state.count = count;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.waiting = false;
      state.error = action.error?.message || "Failed to load comments";
    });

    builder.addCase(sendComment.pending, (state) => {
      state.waiting = true;
      state.error = null;
    });
    builder.addCase(sendComment.fulfilled, (state, action) => {
      state.waiting = false;
      state.error = null;
      // action.payload = response.data.result (новый комментарий)
      state.comments.push(action.payload);
      state.count = state.count + 1;
      state.newCommentId = action.payload._id;
    });
    builder.addCase(sendComment.rejected, (state, action) => {
      state.waiting = false;
      state.error = action.error?.message || "Failed to send comment";
    });
  },
});

export default commentsSlice.reducer;
