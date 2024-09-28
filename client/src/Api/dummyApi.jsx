import axios from "axios";

// Base URL for the API
const BASE_URL = "https://dummyjson.com/products";
// const API_BASE_URL = import.meta.env.VITE_API__BASE_URL;
// const BASE_URL = `${API_BASE_URL}/products`;

// Fetch products with pagination, sorting, and category filtering
export const getAllProducts = async ({
  limit = 10,
  skip = 0,
  sortBy = "",
  order = "",
  category = "",
}) => {
  const categoryFilter = category ? `/category/${category}` : "";
  const response = await axios.get(
    `${BASE_URL}${categoryFilter}?limit=${limit}&skip=${skip}${
      sortBy ? `&sortBy=${sortBy}&order=${order}` : ""
    }`
  );
  return response.data.products;
};

// Fetch a single product by ID
export const getSingleProduct = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

// Search products by query
export const searchProductsApi = async (query) => {
  const response = await axios.get(`${BASE_URL}/search?q=${query}`);
  return response.data.products;
};

// Fetch all product categories
export const getCategories = async () => {
  const response = await axios.get(`${BASE_URL}/categories`);
  return response.data;
};

// Fetch products by category
export const getProductsByCategory = async (category) => {
  const response = await axios.get(`${BASE_URL}/category/${category}`);
  return response.data.products;
};
