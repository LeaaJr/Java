// SectionCards.js
import styles from '../Styles/SectionCard.module.css'
import React, { useState, useEffect } from 'react';


const SectionCards = ({ product }) => {
  // Verificación para evitar el error de undefined
  if (!product || !product.name) {
    return <div></div>
  }

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
          <button className={styles.btn}>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default SectionCards;
