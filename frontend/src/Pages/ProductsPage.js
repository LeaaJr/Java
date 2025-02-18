import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SectionCards from '../Sections/SectionCards';  // Asegúrate de importar correctamente SectionCards
import axios from 'axios';
import MenuCards from '../Sections/MenuCards';  // Asegúrate de importar correctamente MenuCards

const ProductsPage = () => {
  const [productos, setProductos] = useState([]);  // Estado para almacenar los productos
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const location = useLocation();  // Accedemos a la ubicación actual de la URL

  useEffect(() => {
    // Obtener todos los productos desde la API
    axios
      .get("http://localhost:8080/api/products")  // Asegúrate de que la URL sea correcta
      .then((response) => {
        console.log("Datos obtenidos desde la API:", response.data);  // Verifica los datos aquí
        setProductos(response.data);  // Establece los productos en el estado
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);  // Este useEffect solo se ejecuta una vez cuando el componente se monta

  useEffect(() => {
    // Filtrar los productos según la categoría seleccionada en la URL
    const queryParams = new URLSearchParams(location.search);  // Obtener los parámetros de la URL
    const category = queryParams.get("category");  // Obtener el valor de 'category'

    if (category) {
      setFilteredProducts(productos.filter(product => product.category === category));
    } else {
      setFilteredProducts(productos);  // Si no hay categoría, mostrar todos los productos
    }
  }, [location.search, productos]);  // Este efecto se ejecuta cuando la URL cambia o los productos cambian

  return (
    <div>
      <h1>Menu of Products</h1>
      
      <h2>Products</h2>
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <SectionCards key={product.id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
