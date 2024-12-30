import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../../utils/url";

export const getCategories = createAsyncThunk("/categories/getCategories", async(_, thunkAPI) => {
    try {
        const res = await axios(`${BASE_URL}/categories`);
        return res.data;
    } catch(error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});

export const createCategory = createAsyncThunk(
  "/categories/createCategory",
  async (category, thunkAPI) => {
    try {
      const token = localStorage.getItem("accessToken"); // Получаем токен
      if (!token) {
        return thunkAPI.rejectWithValue("Access token is missing");
      }
      const res = await axios.post(`${BASE_URL}/categories`, { name: category }, {
        headers: {
          Authorization: `Bearer ${token}`, // Добавляем токен в заголовок
        },
      });
      return res.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "/categories/deleteCategory",
  async (categoryId, thunkAPI) => {
    try {
      const token = localStorage.getItem("accessToken"); // Получаем токен
      if (!token) {
        return thunkAPI.rejectWithValue("Access token is missing");
      }

      const res = await axios.delete(`${BASE_URL}/categories/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Добавляем токен в заголовок
        },
      });

      return categoryId; // Возвращаем ID удалённой категории
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error.response?.data?.message || "Ошибка удаления");
    }
  }
);


const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        list: [],
        filtered: [],
        isLoading: false,
        createError: null,
        deleteError: null,
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.list = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getCategories.rejected, (state) => {
            state.isLoading = false;
        })
        builder.addCase(createCategory.pending, (state) => {
            state.isLoading = true;
            state.createError = null;
        })
        builder.addCase(createCategory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.list.push(action.payload);
        })
        builder.addCase(createCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.createError = action.error.message;
        })
        builder.addCase(deleteCategory.pending, (state) => {
            state.isLoading = true;
            state.deleteError = null;
        })
        builder.addCase(deleteCategory.fulfilled, (state, action) => {
          state.isLoading = false;
          const deletedId = action.payload;
          state.list = state.list.filter(
            (category) => category.id !== deletedId
          );
        })
        builder.addCase(deleteCategory.rejected, (state, action) => {
            state.isLoading = false;
            state.deleteError = action.payload;
        });
    }
})

export default categoriesSlice.reducer;
