/*
Due to StrictMode in initial rendering, the useEffect is called twice, causing the product page to render 20 items. After that, it works as expected, fetching 10 items at a time. This issue will not occur in production, so I have disabled StrictMode in development.
*/

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./utils/store";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  //   <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  //   </StrictMode>
);
