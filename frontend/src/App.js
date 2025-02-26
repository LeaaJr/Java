import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ProductsPage from "./Pages/ProductsPage";
import ProductGallery  from './Pages/ProductGallery';
import Footer  from './Components/Footer';

const App = () => {

  
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/ProductGallery" element={<ProductGallery />} />
          </Routes>
      </Router>
      <Footer />
      </>
  );
};

export default App;
