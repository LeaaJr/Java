import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

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

  return (
    <div>

      <Navbar />
      <Home />

{/*       <h1>Lista de Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default App;
