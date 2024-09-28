import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getSingleProduct,
  searchProductsApi,
  getCategories,
  getProductsByCategory,
} from "../Api/dummyApi.jsx";

// Async action to fetch products with pagination (limit and skip for infinite scroll)
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async ({ limit = 10, skip = 0, sortBy = "", order = "", category = "" }) => {
    return await getAllProducts({ limit, skip, sortBy, order, category });
  }
);

// Async action to fetch a single product by ID
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    return await getSingleProduct(id);
  }
);

// Async action to search products by query
export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (query) => {
    return await searchProductsApi(query);
  }
);

// Async action to fetch all product categories
export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async () => {
    return await getCategories();
  }
);

// Async action to fetch products by category
export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (category) => {
    return await getProductsByCategory(category);
  }
);

// Slice for managing products state
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    categories: [],
    status: null,
    searchQuery: "",
    selectedCategory: "",
    singleProduct: null, // To store a single product fetched
    skip: 0, // Track the number of products fetched (pagination)
    hasMore: true, // To track if there are more products to load
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.items = []; // Clear products on new search
      state.skip = 0; // Reset pagination on search
      state.hasMore = true; // Reset hasMore on search
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.items = []; // Reset products when category changes
      state.skip = 0; // Reset pagination on category change
      state.hasMore = true; // Reset hasMore on category change
    },
    clearSingleProduct: (state) => {
      state.singleProduct = null; // Clear single product data
    },
    incrementSkip: (state) => {
      state.skip += 10; // Increase the skip value by 10 for next batch
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "success";
        if (action.payload.length < 10) {
          state.hasMore = false; // No more products to load
        }
        state.items = [...state.items, ...action.payload]; // Append new products to the list
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProduct = action.payload; // Store single product
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.items = action.payload; // Update items with search results
        state.hasMore = false; // Stop further loading after search
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload; // Store fetched categories
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.items = action.payload; // Update items with category-specific products
        state.hasMore = false; // Stop further loading for category filter
      });
  },
});

export const {
  setSearchQuery,
  setCategory,
  clearSingleProduct,
  incrementSkip,
} = productSlice.actions;
export default productSlice.reducer;
