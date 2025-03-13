import React, { useState } from "react";
import styles from '../Styles/Navbar.module.css'; // Import styles as an object
import { Link } from "react-router-dom";
import { ShoppingCart } from 'lucide-react'; // Ensure the icon is correctly imported
import CartItem from '../Pages/CartItem'; // Ensure you import CartItem correctly
import { useCart } from "../Context/CartContext"; // Get useCart hook

const Navbar = () => {
  // Get cart from CartContext
  const { cart } = useCart();

  // Calculate the total quantity of items in the cart
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  // State to track if the cart is open or not
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Function to open the cart
  const handleOpenCart = () => setIsCartOpen(true);

  // Function to close the cart
  const handleCloseCart = () => setIsCartOpen(false);

  return (
    <nav className={styles.menu}> {/* Apply the .menu class from the CSS Module */}
      <div className={styles.menuItem}>
        <div className={styles.menuText}>
          <Link to="/">Home</Link>
        </div>
      </div>
          {/* //SUBMENU  */}
          <div className={`${styles.menuItem} products`}>
      <div className={styles.menuText}>
        <Link to="/Products">All Products</Link>
      </div>
      <div className={styles.subMenu}>
        <h3>Categories</h3>
        <Link to={"#"}><p>Smartphone</p></Link>
        <Link to={"#"}><p>Computers</p></Link>
        <Link to={"#"}><p>Headphones</p></Link>
        <Link to={"#"}><p>Tablet</p></Link>
        <Link to={"#"}><p>Smartwatch</p></Link>
      </div>
    </div>

      <div className={styles.menuItem}>
        <div className={styles.menuText}>
          <a href="/Faq">About</a>
        </div>
      </div>
      <div className={styles.menuItem}>
        <div className={styles.menuText}>
          {/* Button to open the cart */}
          <button className="cart-button" onClick={handleOpenCart}>
            <ShoppingCart />
            {totalQuantity > 0 && (
              <span className={styles.cartBadge}>{totalQuantity}</span>
            )}
          </button>
        </div>
      </div>

      {/* Pass open and onClose props to the CartItem component */}
      <CartItem open={isCartOpen} onClose={handleCloseCart} />
    </nav>
  );
};

export default Navbar;
