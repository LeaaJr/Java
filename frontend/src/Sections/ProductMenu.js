import React, { useState, useEffect } from "react";
import { Link, } from "react-router-dom"; // Si usas React Router, puedes obtener la categoría de la URL
import axios from "axios";

const ProductMenu = ({ categoriaSeleccionada }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Realizar la solicitud a la API con la categoría seleccionada
    setLoading(true);
    axios
      .get(`http://localhost:8080/api/productos?categoria=${categoriaSeleccionada}`)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error al obtener los productos");
        setLoading(false);
      });
  }, [categoriaSeleccionada]); // Recargamos la solicitud cada vez que cambia la categoría

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Limitar a los primeros 4 productos
  const limitedProducts = products.slice(0, 4);

  console.log(products);

  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl px-4 py-64 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Productos de {categoriaSeleccionada}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
          {limitedProducts.map((product) => (
            <Link
              key={product.id}
              to="/ProductGallery"
              state={{
                product: { ...product, imagenes: [product.imageUrl] },
              }}
              className="group"
            >
              <img
                alt={product.nombre}
                src={product.imageUrl}
                className="aspect-square w-full rounded-lg bg-white object-contain group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-sm text-white">{product.nombre}</h3>
              <p className="mt-1 text-lg font-medium text-white">
                ${product.precio.toFixed(2)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductMenu;