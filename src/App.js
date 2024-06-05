import "./App.css";
import "./Pages/Pages.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Electronics from "./Pages/Electronics/Electronics";
import Fashion from "./Pages/Fashion/Fashion";
import Groceries from "./Pages/Grocery/Groceries";
import Home from "./Pages/Home/Home";
import { ProductDataProvider } from "./Context/Productcontext";
import Cart from "./Pages/Cart/Cart";
import { CartProvider } from "./Context/Cartcontext";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

function App() {
  return (
    <>
      <ProductDataProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/groceries" element={<Groceries />} />
              <Route path="/electronics" element={<Electronics />} />
              <Route path="/fashion" element={<Fashion />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </Router>
        </CartProvider>
      </ProductDataProvider>
    </>
  );
}

export default App;
