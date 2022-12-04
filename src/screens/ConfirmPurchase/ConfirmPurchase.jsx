import logo from "../../assets/images/logo/converse.webp";
import { useContext } from "react";
import { CartContext } from "../../components/Context/CartContext";
import { CartItem } from "../../components/CartItem/CartItem";
import { NavLink } from "react-router-dom";
import { firebaseServices } from "../../services/firebase";
import { CartContext } from "../../components/Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import styles from "../../CSS/cart.module.css";

export const Cart = () => {
  const { cartArray, deleteItem, totalCart } = useContext(CartContext);
  const total = totalCart();
  const [cartId, setCartId] = useState(null);

  const saveCart = () => {
    const usersCart = {
      user: {
        ...currentUser,
      },
      items: cartArray,
      total: { total },
    };
    const db = getFirestore();

    const cartCollection = collection(db, "carts");
    addDoc(cartCollection, usersCart).then((docRef) => {
      setCartId(docRef.id);
    });
  };

  return (
    <>
      <div>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="Logo" />
        </div>
        <div className={styles.cartOverlay}></div>
        <div className={styles.cartContainer}>
          <div className={styles.titleContainer}>
            <h3 className={styles.cartTitle}>Carrito de compras</h3>
          </div>
          <div className={styles.subTitle}>
            <p>Producto</p>
            <p>Subtotal</p>
          </div>
          <div>
            {cartArray.map((prod) => (
              <CartItem
                key={prod.id}
                id={prod.id}
                img={prod.img}
                title={prod.title}
                count={prod.quantity}
                price={prod.price}
                deleteItem={deleteItem}
              />
            ))}
          </div>
          <div className={styles.cartBottom}>
            <div className={styles.cartTotal}>
              <h3 className={styles.total}>Total:</h3>
              <span className={styles.import}>${totalCart()},99</span>
            </div>
          </div>
          <div className={styles.cartOption}>
            <div to={"/login"} className={styles.closeBuy}>
              Confirmar compra
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
