import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchAllProducts, setCategory } from "../utils/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    // Fetch all products when the component mounts
    dispatch(fetchAllProducts({ limit: 30, skip: 0 }));
  }, [dispatch]);

  if (status === "loading") {
    return <div className="text-center">Loading products...</div>;
  }

  if (status === "failed") {
    return <div className="text-center">Failed to load products.</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
