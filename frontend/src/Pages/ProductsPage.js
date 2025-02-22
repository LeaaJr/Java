import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SectionCards from "../Sections/SectionCards"; // Asegúrate de importar el componente correctamente

const ProductsPage = () => {
  const [productos, setProductos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const location = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        console.log("Respuesta de la API:", response);
        console.log("Datos obtenidos desde la API:", response.data);
        setProductos(response.data || []); // Asegura que siempre sea un array
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  useEffect(() => {
    if (!productos) return;

    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");

    if (category) {
      setFilteredProducts(productos.filter((product) => product.category === category));
    } else {
      setFilteredProducts(productos);
    }
  }, [location.search, productos]);

  console.log("Productos obtenidos:", productos);
  console.log("Productos filtrados:", filteredProducts);

  return (
    <div>
      {productos.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <SectionCards products={productos} /> // Aquí solo pasa la lista completa de productos
      )}
    </div>
  );
};

export default ProductsPage;
