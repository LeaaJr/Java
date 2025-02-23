import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SectionCards from "../Sections/SectionCards"; // Asegúrate de importar el componente correctamente

const ProductsPage = () => {
  const [productos, setProductos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const location = useLocation();

  // Obtener todos los productos al cargar la página
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

  // Filtrar productos cuando cambia la búsqueda en la URL (por ejemplo, categoría)
  useEffect(() => {
    if (!productos) return;

    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");

    if (category) {
      // Filtrar productos por categoría
      setFilteredProducts(productos.filter((product) => product.categoria === category));
    } else {
      // Si no hay categoría, mostrar todos los productos
      setFilteredProducts(productos);
    }
  }, [location.search, productos]); // Dependencias: cuando cambian la URL o los productos

  console.log("Productos obtenidos:", productos);
  console.log("Productos filtrados:", filteredProducts);

  return (
    <div>
      {filteredProducts.length === 0 ? (
        <p className="text-center">Cargando productos...</p>
      ) : (
        <SectionCards products={filteredProducts} /> // Pasa los productos filtrados aquí
      )}
    </div>
  );
};

export default ProductsPage;
