import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const ProductGallery = () => {
  const location = useLocation();
  const product = location.state?.product;

  // Inicializa las imágenes con un array vacío si no hay producto
  const images = product?.imagenes || [];
  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  // Si no hay producto, muestra un mensaje
  if (!product) {
    return <p className="text-center text-gray-500">Producto no encontrado</p>;
  }

  return (
    <div className="flex flex-row gap-8 p-6 max-w-5xl mx-auto py-32">
      {/* 🖼 Contenedor de imagen y miniaturas */}
      <div className="w-1/2 flex flex-col items-center">
        {/* 📌 Imagen principal */}
        <div className="w-full aspect-square bg-gray-100 rounded-xl overflow-hidden shadow-md">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt={product.nombre}
              className="w-full h-full object-contain"
            />
          ) : (
            <p className="text-center text-gray-500 p-6">No hay imagen disponible</p>
          )}
        </div>

        {/* 🔄 Miniaturas */}
        <div className="flex gap-2 overflow-x-auto pb-2 mt-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 hover:opacity-80 
                ${selectedImage === image ? "ring-2 ring-blue-500" : "ring-1 ring-gray-300"}`}
            >
              <img
                src={image}
                alt={`Imagen ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* ℹ️ Información del producto */}
      <div className="w-1/2 flex flex-col gap-6">
        {/* Disponibilidad */}
        <div className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full self-start">
          In stock
        </div>

        {/* 📌 Título del producto */}
        <h1 className="text-3xl font-semibold">{product.nombre}</h1>

        {/* 📖 Descripción */}
        <p className="text-gray-600">{product.descripcion}</p>

        {/* ⭐ Reseñas */}
        <div className="flex items-center gap-2">
          {"★★★★★".split("").map((star, i) => (
            <span key={i} className="text-yellow-400">{star}</span>
          ))}
          <span className="text-gray-400">(5.0)</span>
          <a href="#reviews" className="text-blue-500 hover:underline ml-2">
            345 Reviews
          </a>
        </div>

        {/* 💲 Precio */}
        <div className="text-4xl font-bold text-blue-600">${product.precio.toFixed(2)}</div>

        {/* 🎨 Selección de color */}
        <div>
          <h3 className="font-medium mb-2">Colour</h3>
          <div className="flex gap-2">
            {["Green", "Pink", "Silver", "Blue"].map((color) => (
              <button
                key={color}
                className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* 💾 Selección de almacenamiento */}
        <div>
          <h3 className="font-medium mb-2">SSD capacity</h3>
          <div className="flex gap-2">
            {["256GB", "512GB", "1TB"].map((storage) => (
              <button
                key={storage}
                className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700"
              >
                {storage}
              </button>
            ))}
          </div>
        </div>

        {/* 🛒 Botones de compra */}
        <div className="flex gap-4">
          <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Add to cart
          </button>
          <button className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-800">
            Add to favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
