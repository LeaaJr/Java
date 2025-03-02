import React, { useState, useEffect } from "react";
import MenuCards from '../Sections/MenuCards';
import { Header } from "../Components/Header";
import { Carrousell } from "../Sections/Carrousell";
import styles from '../Styles/Home.module.css';
import { FAQ } from "../Components/Faq";
import IconCircle from "../Components/IconCircle";
import Footer from "../Components/Footer";
import SectionCards from "../Sections/SectionCards";
import axios from "axios";

export function Home() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("all");
  const [featuredProducts, setFeaturedProducts] = useState([]); // 👈 Estado para productos destacados
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const products = [
    {
      name: "Notebooks",
      category: "computers",
      year: "Now",
      description: "A new, more powerful way to play, browse and study.",
    },
    {
      name: "Smartphone",
      category: "cellphones",
      year: "Now",
      description: "You can find the most advanced smartphone on the market here.",
    },
    {
      name: "Smartwatch",
      category: "smartwatch",
      year: "Now",
      description: "The most advanced smartwatch with health tracking features and long-lasting battery life."
    },
    {
      name: "Headphones",
      category: "headphones",
      year: "Now",
      description: "High-quality headphones with noise cancellation, immersive sound, and comfortable design."
    },
    {
      name: "Tablet",
      category: "tablet",
      year: "Now",
      description: "The latest tablet with a powerful processor, stunning display, and extended battery life."
    },
    {
      name: "Bluetooth Headphones",
      category: "accessories",
      year: "Now",
      description: "Noise canceling headphones with surround sound."
    }
  ];

  // Función para manejar el cambio de categoría
  const handleCategoriaChange = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  // Filtrar productos según la categoría seleccionada
  const filteredProducts = categoriaSeleccionada === "all"
    ? products
    : products.filter(product => product.category === categoriaSeleccionada);

  // 🔹 Cargar los productos destacados desde el backend
  useEffect(() => {
    axios.get("http://localhost:8080/api/productos/destacados") // Ajusta la ruta según tu backend
      .then((response) => {
        setFeaturedProducts(response.data); // Guardamos los productos en el estado
        setLoading(false);
      })
      .catch(() => {
        setError("Error al obtener los productos destacados");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="text-center pt-32">
        <h1 className={styles.texttittle}>Featured Products</h1>
      </div>
      <Carrousell />
      <IconCircle />

      <div className="menu-container">
        {/* Mostrar los productos filtrados */}
        {filteredProducts.map((product) => (
          <MenuCards
            key={product.name}
            category={product.category}
            categoryName={product.name}
            product={product}
          />
        ))}
      </div>

      <FAQ />

      <h2 className="text-center text-white text-2xl font-bold mt-10">Productos Destacados</h2>

      {loading ? <p className="text-center text-white">Cargando productos...</p> : (
        <SectionCards products={featuredProducts} />
      )}

      {error && <p className="text-center text-red-500">{error}</p>}

      <Footer />
    </>
  );
}

export default Home;
