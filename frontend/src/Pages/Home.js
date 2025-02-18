import React from "react";
import MenuCards from '../Sections/MenuCards';
import { Header } from "../Components/Header";
import { Carrousell } from "../Sections/Carrousell";
import styles from '../Styles/Home.module.css';
import { Footer } from "../Components/Footer";
import { FAQ } from "../Components/Faq";

export function Home() {
  
  const products = [
    {
      name: "Notebooks",
      category: "computers",
      year: "2023",
      description: "Una potente laptop para todo tipo de trabajo, desde diseño hasta programación.",
    },
    {
      name: "Smartphone",
      category: "cellphones",
      year: "2024",
      description: "El smartphone más avanzado con cámara de 108MP y batería de larga duración.",
    },
    {
      name: "Auriculares Bluetooth",
      category: "accessories",
      year: "2022",
      description: "Auriculares con cancelación de ruido y sonido envolvente.",
    },
  ];

  return (
    <>
      <Header />
      <div className="text-center pt-32">
        <h1 className={styles.texttittle}>Featured Products</h1>
      </div>
      <Carrousell />

      <div className="menu-container">
        {/* Pasamos los productos a cada MenuCard con las categorías */}
        {products.map((product) => (
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
