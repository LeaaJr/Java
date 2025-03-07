import React, { useState, useEffect } from "react";
import { Header } from "../Components/Header";
import { Carrousell } from "../Sections/Carrousell";
import styles from '../Styles/Home.module.css';
import { FAQ } from "../Components/Faq";
import DeviceDisplay from "../Components/DeviceDisplay";
import Footer from "../Components/Footer";
import MenuCards from '../Sections/MenuCards'; // Asegúrate de que la ruta sea correcta
import SectionCards from "../Sections/SectionCards";

export function Home() {
  const [productsDB, setProductsDB] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("all");
  const [activeDevice, setActiveDevice] = useState(""); // Estado para el dispositivo activo

  useEffect(() => {
    // Función para obtener los productos de la base de datos
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/products"); // Cambia esto a la URL correcta de tu API
        const data = await response.json();
        setProductsDB(data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchProducts();
  }, []);

  const products = [
    // ... Tus productos aquí
  ];

  // Función para manejar el cambio de categoría
  const handleCategoriaChange = (categoria) => {
    setCategoriaSeleccionada(categoria);
  };

  // Filtrar productos según la categoría seleccionada
  const filteredProducts = categoriaSeleccionada === "all"
    ? products
    : products.filter(product => product.category === categoriaSeleccionada);

  // Limitar a los primeros 4 productos de la base de datos
  const limitedProductsDB = productsDB.slice(0, 4);

  // Función para alternar el dispositivo activo
  const toggleDevice = (device) => {
    setActiveDevice(activeDevice === device ? "" : device);  // Alterna entre los dispositivos
  };


  return (
    <>
      <Header />
      <div className="text-center pt-32">
        <h1 className={styles.texttittle}>Featured Products</h1>
      </div>
      <Carrousell />
      
      {/* Renderizamos los dispositivos */}
      <DeviceDisplay />


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

      <SectionCards products={limitedProductsDB} />
      <Footer />
    </>
  );
}

export default Home;
