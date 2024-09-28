const ProductCardShimmer = () => {
  return (
    <div className="border rounded-lg p-4 flex flex-col animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded mb-4"></div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-full"></div>
      <div className="h-3 bg-gray-200 rounded w-5/6 mt-1"></div>
    </div>
  );
};

export default ProductCardShimmer;
