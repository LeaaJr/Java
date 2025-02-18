import React from 'react';
import styles from '../Styles/SectionCards.module.css';  // Importa los estilos CSS que mencionaste

const SectionCards = ({ product }) => {
  return (
    <div className={styles.nft}>
      <div className={styles.main}>
        <img
          className={styles.tokenImage}
          src={product.imageUrl || "https://via.placeholder.com/300"}  // Si no hay imagen, muestra una por defecto
          alt={product.name}
        />
        <h2>{product.name}</h2>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.tokenInfo}>
          <div className={styles.price}>
            <ins>◘</ins>
            <p>{product.price} ETH</p>
          </div>
          <div className={styles.duration}>
            <ins>◷</ins>
            <p>{product.duration} days left</p>
          </div>
        </div>
        <hr />
        <div className={styles.creator}>
          <div className={styles.wrapper}>
            <img
              src={product.creatorImage || "https://via.placeholder.com/40"}  // Imagen del creador
              alt="Creator"
            />
          </div>
          <p><ins>Creation of</ins> {product.creator}</p>
        </div>
      </div>
      <p>No products found</p>
    </div>
  );
};

export default SectionCards;
