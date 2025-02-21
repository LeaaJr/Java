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
        console.log("Respuesta de la API:", response); // Verifica la respuesta completa
        console.log("Datos obtenidos desde la API:", response.data);
        setProductos(response.data || []); // Asegura que siempre sea un array
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  useEffect(() => {
    if (!productos) return; // Evita que el filtro corra antes de que `productos` tenga datos

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
        <p>Cargando productos...</p> // ⬅ Mensaje mientras carga
      ) : (
        <div className="bg-black">
          {productos.map((product) => (
            <SectionCards key={product.id} product={product} /> // ⬅ Usa el componente con estilos propios
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
