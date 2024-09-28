import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { fetchAllProducts, incrementSkip } from "../utils/productSlice";
import ProductShimmerCard from "./ProductShimmerCard";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const skip = useSelector((state) => state.products.skip);
  const hasMore = useSelector((state) => state.products.hasMore);
  const status = useSelector((state) => state.products.status);

  const observer = useRef(); // keep track of the last product for infinite scrolling

  useEffect(() => {
    // Fetch products when the component mounts or skip value changes (trigger new fetch)
    dispatch(fetchAllProducts({ skip, limit: 10 }));
  }, [dispatch, skip]);

  // Infinite scroll: function to observe when we reach the last product
  const lastProductElementRef = (node) => {
    if (status === "loading") return;
    if (observer.current) observer.current.disconnect(); // Disconnect the previous observer

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        // Increment skip to fetch the next batch when the last product is visible
        dispatch(incrementSkip());
      }
    });

    if (node) observer.current.observe(node); // Observe the last product
  };

  //   if (status === "loading" && skip === 0) {
  //     return <div className="text-center">Loading products...</div>; // Initial loading state
  //   }

  if (status === "loading" && skip === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <ProductShimmerCard key={index} />
          ))}
      </div>
    );
  }

  if (status === "failed") {
    return <div className="text-center">Failed to load products.</div>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => {
          // Attach observer to the last product in the list for infinite scrolling
          if (index === products.length - 1) {
            return (
              <div ref={lastProductElementRef} key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          }
          return (
            <div ref={lastProductElementRef} key={`${product.id}-${index}`}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
      {status === "loading" && skip > 0 && (
        <div className="text-center mt-4">Loading more products...</div>
      )}
    </>
  );
};

export default ProductList;
