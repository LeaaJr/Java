import React from "react";
import styles from '../Styles/Navbar.module.css'; // Importa los estilos como un objeto

const Navbar = () => {
  return (
    <nav className={styles.menu}> {/* Aplica la clase .menu del CSS Module */}
      <div className={styles.menuItem}> {/* Aplica la clase .menuItem */}
        <div className={styles.menuText}>
          <a href="#">Home</a>
        </div>
        <div className={styles.subMenu}>
          <h3>Submenu Item 1</h3>
          <p>Details about the first submenu item.</p>
        </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.menuText}>
          <a href="#">Products</a>
        </div>
        <div className={styles.subMenu}>
          <h3>Submenu Item 2</h3>
          <p>Details about the second submenu item.</p>
        </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.menuText}>
          <a href="#">About</a>
        </div>
        <div className={styles.subMenu}>
          <h3>Submenu Item 3</h3>
          <p>Details about the third submenu item.</p>
        </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.menuText}>
          <a href="#">Contact</a>
        </div>
        <div className={styles.subMenu}>
          <h3>Submenu Item 4</h3>
          <p>Details about the fourth submenu item.</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
