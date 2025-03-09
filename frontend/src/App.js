import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import ProductGallery from "./Pages/ProductGallery";
import CartItem from "./Pages/CartItem";
import { CartProvider } from "./Context/CartContext"; // Importa el CartProvider

const App = () => {
  
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/ProductGallery" element={<ProductGallery />} />
          <Route path="/CartItem" element={<CartItem />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
