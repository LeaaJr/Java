import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";

const App = () => {

  
  return (
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
      </Router>
  );
};

export default App;
