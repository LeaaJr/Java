import React from 'react';
import { FaShippingFast, FaShieldAlt, FaLock } from 'react-icons/fa';
import styles from '../Styles/IconCircle.module.css'; // Importa los estilos como un módulo

const IconCircle = () => {
  return (
    <div className={styles.iconContainer}>
      <div className={styles.iconItem}>
        <div className={styles.iconCircle}>
          <FaShippingFast />
        </div>
        <p className={styles.iconText}>Shipping in 24 hs</p>
      </div>
      <div className={styles.iconItem}>
        <div className={styles.iconCircle}>
          <FaShieldAlt />
        </div>
        <p className={styles.iconText}>Security</p>
      </div>
      <div className={styles.iconItem}>
        <div className={styles.iconCircle}>
          <FaLock />
        </div>
        <p className={styles.iconText}>Secure Payment</p>
      </div>
    </div>
  );
};

export default IconCircle;
