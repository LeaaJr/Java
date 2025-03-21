import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "../Context/CartContext"; // UseCart hook

export const ProductGallery = () => {
  const location = useLocation();
  const { addToCart } = useCart(); // Get the addToCart function from context
  const product = location.state?.product;

  const images = [product?.imageUrl, product?.imageUrl2, product?.imageUrl3].filter(Boolean);

  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (product) {
      const images = [product.imageUrl, product.imageUrl2, product.imageUrl3].filter(Boolean);
      if (images.length > 0) {
        setSelectedImage(images[0]);
      }
    }
  }, [product]);

  if (!product) {
    return <p className="text-center text-gray-500">Producto no encontrado</p>;
  }

  return (
    <div className="flex flex-row gap-8 p-6 max-w-5xl mx-auto py-32">
      {/* IMAGE SECTION */}
      <div className="w-1/2 flex flex-col items-center">
        <div className="w-full aspect-square bg-white rounded-xl overflow-hidden shadow-md">
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

        {/* THUMBNAILS */}
        <div className="flex gap-2 overflow-x-auto pb-2 mt-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 hover:opacity-80 
                ${selectedImage === image ? "ring-2 ring-blue-500" : "ring-1 ring-gray-300"}`}
            >
              <img src={image} alt={`Imagen ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="w-1/2 flex flex-col gap-6">
        <div className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full self-start">
          In stock
        </div>
        <h1 className="text-3xl font-semibold">{product.nombre}</h1>
        <p className="text-gray-600">{product.descripcion}</p>

        {/* STARS AND REVIEWS */}
        <div className="flex items-center gap-2">
          {"★★★★★".split("").map((star, i) => (
            <span key={i} className="text-yellow-400">{star}</span>
          ))}
          <span className="text-gray-400">(5.0)</span>
          <a href="#reviews" className="text-blue-500 hover:underline ml-2">345 Reviews</a>
        </div>

        {/* PRICE */}
        <div className="text-4xl font-bold text-gray-300">€{product.precio.toFixed(2)}</div>

        {/* BUTTONS */}
        <div className="flex gap-4">
          <button
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            onClick={() => 
              addToCart({
                id: product.id,
                nombre: product.nombre,
                precio: product.precio,
                imagen: selectedImage
              })
            }
          >
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
