import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../utils/productSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(searchProducts(query));
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex mb-4 justify-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="border p-2 rounded-l-md"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
