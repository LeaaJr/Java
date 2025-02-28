import React from "react";
import styles from '../Styles/Navbar.module.css'; // Importa los estilos como un objeto
import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className={styles.menu}> {/* Aplica la clase .menu del CSS Module */}
      <div className={styles.menuItem}> {/* Aplica la clase .menuItem */}
        <div className={styles.menuText}>
          <Link to="/">Home</ Link>
        </div>
  
      </div>
      <div className={styles.menuItem}>
        <div className={styles.menuText}>
          <Link href="/Products">Products</ Link>
        </div>
        <div className={styles.subMenu}>
          <h3>Submenu Item 2</h3>
          <p>Details about the second submenu item.</p>
        </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.menuText}>
          <a href="/Faq">About</a>
        </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.menuText}>
          <Link to="/CartItem"> <ShoppingCart /> </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
