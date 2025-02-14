import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionCards from '../Sections/SectionCards';
import { Header } from "../Components/Header";
import { Carrousell } from "../Sections/Carrousell";
import '../Styles/Home.css';

export function Home() {
  const [productos, setProductos] = useState([]);

  // Función para obtener los productos desde la API
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")  // Asegúrate de que la URL coincida con tu backend
      .then((response) => {
        setProductos(response.data);  // Asignamos los productos a nuestro estado
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  // Mantén la lógica de mostrar productos (como lo tenías antes)
  const products = productos.length > 0 ? productos : [
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
      <div className="text-center">
        <h1 className="text-">Featured Products</h1>
      </div>
      <Carrousell />
      
      <div>
        {/* Mapea los productos y pasa a SectionCards como lo tenías */}
        {products.map((product, index) => (
          <SectionCards key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default Home;
