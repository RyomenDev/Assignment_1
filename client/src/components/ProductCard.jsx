const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-blue-500">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded mb-4 transition duration-300 ease-in-out hover:opacity-90"
      />
      <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-blue-600 transition duration-300 ease-in-out">
        {product.title}
      </h2>
      <p className="text-gray-600 mb-2 font-semibold">${product.price}</p>
      <p className="text-gray-500 line-clamp-3">{product.description}</p>
    </div>
  );
};

export default ProductCard;
