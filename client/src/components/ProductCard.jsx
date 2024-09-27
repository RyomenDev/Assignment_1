const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <p className="text-gray-500">{product.description}</p>
    </div>
  );
};

export default ProductCard;

