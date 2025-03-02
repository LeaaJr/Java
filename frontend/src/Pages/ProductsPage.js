import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SectionCards from "../Sections/SectionCards";
import { useCart } from "../Context/CartContext"; // Importar el contexto del carrito
import Footer from "../Components/Footer";

const ProductsPage = () => {
  const [productos, setProductos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  const location = useLocation();
  const { addToCart } = useCart(); // Obtiene addToCart del contexto

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        setProductos(response.data || []);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  useEffect(() => {
    if (!productos) return;

    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");

    let filtered = productos;

    if (category) {
      filtered = filtered.filter((product) => product.categoria === category);
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      filtered = [...filtered].sort((a, b) => a.precio - b.precio);
    } else if (sortOrder === "desc") {
      filtered = [...filtered].sort((a, b) => b.precio - a.precio);
    }

    setFilteredProducts(filtered);
  }, [location.search, productos, searchTerm, sortOrder]);

  return (
    <>
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "15px", paddingTop: "5rem", paddingInlineEnd: "10rem" }}>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "4px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            background: "black",
          }}
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{
            padding: "4px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            cursor: "pointer",
            background: "black",
          }}
        >
          <option value="default">Ordenar por precio</option>
          <option value="asc">Menor a mayor</option>
          <option value="desc">Mayor a menor</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center">No se encontraron productos...</p>
      ) : (
        <SectionCards products={filteredProducts} addToCart={addToCart} /> /* Pasamos addToCart */
      )}
    </div>
    <Footer />
    </>
  );
};

export default ProductsPage;
