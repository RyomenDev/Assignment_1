import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async action to fetch all products with optional limit and skip for pagination
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async ({ limit = 30, skip = 0, sortBy = "", order = "" }) => {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}${
        sortBy ? `&sortBy=${sortBy}&order=${order}` : ""
      }`
    );
    return response.data.products;
  }
);

// Async action to fetch a single product by ID
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  }
);

// Async action to search products by query
export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (query) => {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${query}`
    );
    return response.data.products;
  }
);

// Async action to fetch all product categories
export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    return response.data;
  }
);

// Async action to fetch products by category
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category) => {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    return response.data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    categories: [],
    status: null,
    searchQuery: "",
    selectedCategory: "",
    singleProduct: null, // To store a single product fetched
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    clearSingleProduct: (state) => {
      state.singleProduct = null; // Clear single product data
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload; // Store all fetched products
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload; // Store single product
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.items = action.payload; // Update items with search results
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload; // Store fetched categories
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.items = action.payload; // Update items with category-specific products
      });
  },
});

export const { setSearchQuery, setCategory, clearSingleProduct } =
  productSlice.actions;
export default productSlice.reducer;
