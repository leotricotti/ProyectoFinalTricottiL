import { TrashCan } from "../Widgets/TrashCan";
import { PlusSign } from "../Widgets/PlusSign";
import { MinusSign } from "../Widgets/MinusSign";
import styles from "../../CSS/cartItem.module.css";

export const CartItem = ({
  id,
  img,
  title,
  count,
  price,
  deleteItem
}) => {
  
  return (
    <>
      <div className={styles.cartBodyContainer}>
        <img className={styles.cartImg} src={img} alt={title} />
        <div className={styles.infoContainer}>
          <p className={styles.itemTitle}>{title}</p>
          <span className={styles.itemPrice}>${price},99</span>
          <div className={styles.btnContainer}>
            <button className={styles.btnPlus}>
              <PlusSign />
            </button>
            <span className={styles.quantity}>{count}</span>
            <button className={styles.btnMinus}>
              <MinusSign />
            </button>
          </div>
        </div>
        <span className={styles.subtotal}>${price * count},99</span>
        <div className={styles.trashCan} onClick={() => deleteItem(id)}>
          <TrashCan />
        </div>
      </div>
    </>
  );
};
