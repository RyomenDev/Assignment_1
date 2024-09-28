import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import {
  fetchAllProducts,
  incrementSkip,
  decrementSkip,
} from "../utils/productSlice";
import ProductShimmerCard from "./ProductShimmerCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const skip = useSelector((state) => state.products.skip);
  const hasMore = useSelector((state) => state.products.hasMore);
  const status = useSelector((state) => state.products.status);

  const limit = 10;

  useEffect(() => {
    console.log("fetching");
    dispatch(fetchAllProducts({ skip, limit }));
  }, [dispatch, skip]);

  const handleNextPage = () => {
    if (hasMore && status !== "loading") {
      dispatch(incrementSkip());
    }
  };

  //   const handlePreviousPage = () => {
  //     if (skip > 0 && status !== "loading") {
  //       dispatch(decrementSkip());
  //     }
  //   };

  if (status === "loading" && skip === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <ProductShimmerCard key={index} />
          ))}
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="text-center text-red-600">Failed to load products.</div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8">
        {products.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 gap-4">
        {/* <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={handlePreviousPage}
          disabled={skip === 0 || status === "loading"}
        >
          Previous
        </button> */}

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={handleNextPage}
          disabled={!hasMore || status === "loading"}
        >
          {status === "loading" ? "Loading..." : "Show More"}
        </button>
      </div>
    </>
  );
};

export default ProductList;
