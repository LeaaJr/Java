import { Link } from 'react-router-dom'; // Importa Link
import styles from '../Styles/SectionCard.module.css'; // Asegúrate de que la ruta sea correcta
import React from 'react';

const SectionCards = ({ product }) => {
  // Verificación para evitar el error de undefined
  if (!product || !product.name) {
    return <div></div>; // Retorna un div vacío si no hay producto
  }

  // Construye una ruta dinámica utilizando el nombre del producto (se mejora con un formato más seguro)
  const categoryLink = `/products?category=${product.category.toLowerCase()}`;

  return (
    <div className={`${styles.card} ${styles[`card-${product.category.replace(/\s+/g, '')}`]}`}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{product.name}</h2>
          <p className={styles.info}>{product.year || 'Year not specified'}</p>
        </div>
        <p className={styles.desc}>{product.description || 'No description available'}</p>
        <div className={styles.buyButton}>
          {/* Aquí utilizamos Link para redirigir a una página del producto */}
          <Link to={categoryLink}>
            <button className={styles.btn}>Buy</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionCards;
