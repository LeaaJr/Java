import React from "react";
import { Link } from "react-router-dom";

const SectionCards = ({ product }) => {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-8">
          <Link
            to="/"
            state={{ product }}
            className="group"
          >
            <img
              alt={product.nombre} // Asegúrate de que "nombre" es la propiedad correcta
              src={product.imageUrl || "https://static1.unieuro.it/medias/sys_master/root/h07/h60/45243676098590/-api-rest-00ed29448a7522f610cac04d7b9ea7e0-assets-5c2f79a84d21f32638f9c8991ee5619c-preview-sgmConversionBaseFormat-sgmProductFormat.jpg"}
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
            />
            <h3 className="mt-4 text-sm text-white">{product.nombre}</h3>
            <p className="mt-1 text-lg font-medium text-white">
              ${product.precio.toFixed(2)}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionCards;
