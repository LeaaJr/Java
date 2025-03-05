import React, { useState } from "react";
import styles from '../Styles/Navbar.module.css'; // Importa los estilos como un objeto
import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react'; // Asegúrate de que el ícono esté correctamente importado
import CartItem from '../Pages/CartItem'; // Asegúrate de importar el componente CartItem

const Navbar = () => {
  // Estado para controlar la apertura y cierre del carrito
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Función para abrir el carrito
  const handleOpenCart = () => setIsCartOpen(true);

  // Función para cerrar el carrito
  const handleCloseCart = () => setIsCartOpen(false);

  return (
    <nav className={styles.menu}> {/* Aplica la clase .menu del CSS Module */}
      <div className={styles.menuItem}> {/* Aplica la clase .menuItem */}
        <div className={styles.menuText}>
          <Link to="/">Home</Link>
        </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.menuText}>
          <Link to="/Products">Products</Link>
        </div>
        <div className={styles.subMenu}>
          <h3></h3>
          <Link to={"#"}>
            <p>Smartphone</p>
          </Link>
          <Link to={"#"}>
            <p>Computers</p>
          </Link>
          <Link to={"#"}>
            <p>Headphones</p>
          </Link>
          <Link to={"#"}>
            <p>Tablet</p>
          </Link>
          <Link to={"#"}>
            <p>Smartwatch</p>
          </Link>
        </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.menuText}>
          <a href="/Faq">About</a>
        </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.menuText}>
          {/* Cambié el <Link> por un <button> para manejar el evento onClick */}
          <button onClick={handleOpenCart} className="cart-button">
            <ShoppingCart />
          </button>
        </div>
      </div>

      {/* Aquí pasamos las props open y onClose al componente CartItem */}
      <CartItem open={isCartOpen} onClose={handleCloseCart} />
    </nav>
  );
};

export default Navbar;
