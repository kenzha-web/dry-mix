import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../../../utils/url";
import {shuffle} from "../../../utils/common";

export const getProducts = createAsyncThunk("/products/getProducts", async({ page, limit }, thunkAPI) => {
    try {
        const res = await axios(`${BASE_URL}/products?page=${page}&limit=${limit}`);
        return res.data;
    } catch(error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})

export const createProduct = createAsyncThunk("/products/createProduct", async (productData, thunkAPI) => {
  try {
    const token = localStorage.getItem("accessToken"); // Получаем токен
    if (!token) {
      return thunkAPI.rejectWithValue("Access token is missing");
    }
    const res = await axios.post(`${BASE_URL}/products`, productData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});

export const updateProduct = createAsyncThunk(
  "/products/updateProduct",
  async ({ id, updates }, thunkAPI) => {
    try {
      const token = localStorage.getItem("accessToken"); // Получаем токен
      if (!token) {
        return thunkAPI.rejectWithValue("Access token is missing");
      }
      const res = await axios.patch(`${BASE_URL}/products/${id}`, updates, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk("/products/deleteProduct", async (productId, thunkAPI) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      return thunkAPI.rejectWithValue("Access token is missing");
    }
    const res = await axios.delete(`${BASE_URL}/products/${productId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return productId;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
  }
});

export const uploadProductImage = createAsyncThunk(
  "/products/uploadImage",
  async ({ id, imageFile }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const res = await axios.post(`${BASE_URL}/products/${id}/upload-image`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        list: [],
        filtered: [],
        related: [],
        isLoading: false,
        createError: null,
        updateError: null,
        deleteError: null,
        uploadError: null,
    },
    // reducers: {
    //     filterByPrice: (state, {payload}) => {
    //         state.filtered = state.list.data.filter(({price}) => price < payload);
    //     },
    //     getRelatedProducts: (state, {payload}) => {
    //         const list = state.list.data.filter(({category: {id}}) => id === payload);
    //         state.related = shuffle(list)
    //     },
    // },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.list = action.payload.data;
            state.isLoading = false;
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        })
        builder.addCase(createProduct.pending, (state) => {
          state.isLoading = true;
          state.createError = null;
        });
        builder.addCase(createProduct.fulfilled, (state, action) => {
          state.isLoading = false;
          // добавляем новый продукт в список
          state.list.push(action.payload.data);
        });
        builder.addCase(createProduct.rejected, (state, action) => {
          state.isLoading = false;
          state.createError = action.payload;
        });

        builder.addCase(updateProduct.pending, (state) => {
          state.isLoading = true;
          state.updateError = null;
        });
        builder.addCase(updateProduct.fulfilled, (state, action) => {
          state.isLoading = false;
          const updatedProduct = action.payload.data;
          const index = state.list.findIndex((p) => p.id === updatedProduct.id);
          if (index !== -1) {
            state.list[index] = updatedProduct;
          }
        });
        builder.addCase(updateProduct.rejected, (state, action) => {
          state.isLoading = false;
          state.updateError = action.payload;
        });

      // ============ DELETE PRODUCT ============
        builder.addCase(deleteProduct.pending, (state) => {
          state.isLoading = true;
          state.deleteError = null;
        });
        builder.addCase(deleteProduct.fulfilled, (state, action) => {
          state.isLoading = false;
          const deletedId = action.payload;
          state.list = state.list.filter((product) => product.id !== deletedId);
        });
        builder.addCase(deleteProduct.rejected, (state, action) => {
          state.isLoading = false;
          state.deleteError = action.payload;
        });

        builder.addCase(uploadProductImage.pending, (state) => {
          state.isLoading = true;
          state.uploadError = null;
        });
        builder.addCase(uploadProductImage.fulfilled, (state, action) => {
          state.isLoading = false;
          const updated = action.payload;
          const index = state.list.findIndex((p) => p.id === updated.id);
          if (index !== -1) {
            state.list[index].imageUrl = updated.imageUrl;
          }
        });
        builder.addCase(uploadProductImage.rejected, (state, action) => {
          state.isLoading = false;
          state.uploadError = action.payload;
        });
    }
})

// export const {filterByPrice, getRelatedProducts} = productsSlice.actions
export default productsSlice.reducer;
