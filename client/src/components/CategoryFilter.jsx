import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchProductsByCategory,
} from "../utils/productSlice";

const CategoryList = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    dispatch(fetchProductsByCategory(category.slug)); // Assuming category has a slug
  };

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {categories.map((category) => (
        <button
          key={category.slug} // Use a unique identifier
          onClick={() => handleCategoryClick(category)}
          className="border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition"
        >
          {category.name} {/* Ensure you're rendering a string */}
        </button>
      ))}
    </div>
  );
};

export default CategoryList;
