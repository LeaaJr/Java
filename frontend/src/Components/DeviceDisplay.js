// CIRCULOS

import React from 'react';
import styles from '../Styles/DeviceDisplay.module.css';  // Importamos el archivo CSS modular
import { FaShippingFast,} from "react-icons/fa";
import { MdOutlinePayment, MdOutlineSecurity } from "react-icons/md";

const DeviceDisplay = () => {

  return(
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {/* Card 1: Envío */}
        <div className={styles.card}>
          <div className={styles.icon}>
            <i className="material-icons md-36"><FaShippingFast /></i>
          </div>
          <p className={styles.title}>Shipping</p>
        </div>
        {/* Card 2: Pago Seguro */}
        <div className={styles.card}>
          <div className={styles.icon}>
            <i className="material-icons md-36"><MdOutlineSecurity /></i>
          </div>
          <p className={styles.title}>Security </p>
          {/* <p className={styles.text}>Make payments safely with our options.</p> */}
        </div>
        {/* Card 3: Seguridad */}
        <div className={styles.card}>
          <div className={styles.icon}>
            <i className="material-icons md-36"><MdOutlinePayment /></i>
          </div>
          <p className={styles.title}>Secure Payment</p>
          {/* <p className={styles.text}>Your safety is our priority at all times.</p> */}
        </div>
      </div>
    </div>
  );
};

export default DeviceDisplay;
