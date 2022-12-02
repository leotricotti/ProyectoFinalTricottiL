import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "../../CSS/cartWidget.module.css";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

export const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className={styles.cartWidgetContainer}>
      <div className={styles.cartWidget}>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
      <div className={styles.countContainer}>
        <span className={styles.quantity}>{cartItems() || 0}</span>
      </div>
    </div>
  );
};
