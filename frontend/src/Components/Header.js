import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import styles from "../Styles/Header.module.css";


export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Experience Media
            <br />
            Like Never Before
          </h1>
          <p className={styles.description}>
            Enjoy award-winning stereo beats with wireless listening freedom and
            sleek, streamlined with premium padded and delivering first-rate
            playback.
          </p>
          <button className={styles.cta}>Our Products →</button>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="https://i.ibb.co/vB5LTFG/Headphone.png"
            alt="Wireless Headphones"
            className={styles.productImage}
          />
        </div>
        <div className={styles.socialLinks}>
          <a href="#" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="#" aria-label="YouTube">
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};
