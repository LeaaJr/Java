import React from "react";
import { Link } from "react-router-dom";

const SectionCards = ({ products }) => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8 mx-4">
    {products.map((product) => {
      const imageUrl = product.imageUrl || product.imageUrl2 || product.imageUrl3;
      const precio = product.precio;
      const precioFormateado = (typeof precio === 'number' && !isNaN(precio)) ? precio.toFixed(2) : 'Precio no disponible';

      return (
        <Link
          key={product.id}
          to="/ProductGallery"
          state={{ product: { ...product, imagenes: [product.imageUrl] } }}
          className="group"
        >
          <img
            alt={product.nombre}
            src={imageUrl || '/default-image.jpg'}
            className="aspect-square w-full rounded-lg bg-white object-contain group-hover:opacity-75 xl:aspect-7/8"
          />
          <h3 className="mt-4 text-sm text-white">{product.nombre}</h3>
          <p className="mt-1 text-lg font-medium text-white">
          €{precioFormateado}
          </p>
        </Link>
      );
    })}
  </div>
  );
};


export default SectionCards;
