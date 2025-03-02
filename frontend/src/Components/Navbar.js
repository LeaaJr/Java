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
          <Link to="/CartItem"> <ShoppingCart /> </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
