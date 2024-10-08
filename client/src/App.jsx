/*
Due to StrictMode in initial rendering, the useEffect is called twice, causing the product page to render 20 items. After that, it works as expected, fetching 10 items at a time. This issue will not occur in production, so I have disabled StrictMode in development.
*/

import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      {/* <div className="text-2xl font-bold mb-4 flex justify-center">
        Product Store
      </div> */}
      <Header />
      <SearchBar />
      <CategoryFilter />
      <ProductList />
      <Footer />
    </div>
  );
};

export default App;
