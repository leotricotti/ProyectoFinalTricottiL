import { TrashCan } from "../Widgets/TrashCan";
import styles from "../../CSS/cartItem.module.css";

export const CartItem = ({ id, img, title, count, price, deleteItem }) => {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartBodyContainer}>
        <img className={styles.cartImg} src={img} alt={title} />
        <div className={styles.infoContainer}>
          <p className={styles.itemTitle}>{title}</p>
          <span className={styles.itemPrice}>${price},99</span>
          <div className={styles.btnContainer}>
            <span className={styles.quantity}>Cantidad: {count}</span>
          </div>
        </div>
        <span className={styles.subtotal}>${price * count},99</span>
        <div className={styles.trashCan} onClick={() => deleteItem(id)}>
          <TrashCan />
        </div>
      </div>
    </div>
  );
};
