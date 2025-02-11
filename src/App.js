import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import SectionCards from './Sections/SectionCards'

const App = () => {
  const [productos, setProductos] = useState([]);

  // Función para obtener los productos
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
    <div>
      <Navbar />
      <Home />
      <div>
        {products.map((product, index) => (
          <SectionCards key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
