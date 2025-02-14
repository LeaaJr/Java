import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SectionCards from '../Sections/SectionCards';  // Asegúrate de importar correctamente SectionCards
import axios from 'axios';

const ProductsPage = () => {
  const [productos, setProductos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const location = useLocation();  // Accedemos a la ubicación actual de la URL

  useEffect(() => {
    // Obtener todos los productos desde la API
    axios
      .get("http://localhost:8080/api/products")  // Asegúrate de que la URL sea correcta
      .then((response) => {
        setProductos(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

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
      <h1>Products</h1>
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
