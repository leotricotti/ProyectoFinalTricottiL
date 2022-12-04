import { MinusSign } from "../Widgets/MinusSign";
import { PlusSign } from "../Widgets/PlusSign";
import styles from "../../CSS/itemCount.module.css";

export const ItemCount = ({ plusItem, minusItem, count, confirmAdd }) => {
  return (
    <div className={styles.buyItem}>
      <div className={styles.quantity}>
        <h2 className={styles.counterTitle}>Cantidad</h2>
        <div className={styles.counter}>
          <div className={styles.addCuant}>
            <div className={styles.plusSign} onClick={plusItem}>
              <PlusSign />
            </div>
            <span className={styles.number}>{count}</span>
            <div className={styles.minusSign} onClick={minusItem}>
              <MinusSign />
            </div>
          </div>
        </div>
      </div>
      <button className={styles.text} onClick={() => confirmAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};
