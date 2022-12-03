import logo from "../../assets/images/logo/converse.webp";
import { useContext, useState } from "react";
import { CartContext } from "../../components/Context/CartContext";
import { CartItem } from "../../components/CartItem/CartItem";
import { NavLink } from "react-router-dom";
import { firebaseServices } from "../../services/firebase";
import styles from "../../CSS/cart.module.css";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const Cart = () => {
  const { cartArray, deleteItem, totalCart } = useContext(CartContext);
  const [cartId, setCartId] = useState(null);
  const { createOrder } = firebaseServices;
  const total = totalCart();

  const saveCart = () => {
    const usersCart = {
      user: {
        name: "aniel Soto",
        email: "sotopro@gmail.com",
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
      {cartArray.length === 0 && (
        <div className={styles.emptyCartContainer}>
          <h3 className={styles.emptyCartTitle}>Carrito vacio</h3>
          <div>
            <NavLink to={"/products"}>
              <span className={styles.emptyCartLink}>Agregar productos</span>
            </NavLink>
          </div>
        </div>
      )}
      <div>
        {cartArray.length > 0 && (
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
                <button
                  className={styles.closeBuy}
                  // onClick={() => handleCheckout}
                >
                  Finalizar compra
                </button>
              </div>
              <div className={styles.continue}>
                <NavLink to="/products">
                  <span className={styles.continue}>Seguir comprando</span>
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
