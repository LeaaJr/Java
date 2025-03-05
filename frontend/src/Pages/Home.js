import React, { useState} from "react";
import MenuCards from '../Sections/MenuCards';
import { Header } from "../Components/Header";
import { Carrousell } from "../Sections/Carrousell";
import styles from '../Styles/Home.module.css';
import { FAQ } from "../Components/Faq";
import IconCircle from "../Components/IconCircle";
import Footer from "../Components/Footer";

export function Home() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("all");

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

      <Footer />
    </>
  );
}

export default Home;
