import { useContext, useState } from "react";
import { CartContext } from "../../components/Context/CartContext";
import { CartItem } from "../../components/CartItem/CartItem";
import { useAuth } from "../../components/Context/AuthContext";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import "../../CSS/confirmPurchase.css";

export const ConfirmPurchase = () => {
  const { cartArray, deleteItem, totalCart } = useContext(CartContext);
  const { user } = useAuth();
  const [ orderId, setOrderId] = useState(null);


  console.log();
  
  const saveOrder = () => {
    const userOrder = {
      user: {
        email: user.email,
        password: user.accessToken
      },
      items: cartArray,
      total: totalCart(),
    };
    const db = getFirestore();

    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, userOrder).then((docRef) => {
      setOrderId(docRef.id);
    });
  };

  console.log(orderId);


  console.log(totalCart());

  console.log(cartArray);

  return (
    <>
      <div className="purchase-container">
        <div className="title-purchase">
          <h3 className="purchase-title">Detalle de su compra</h3>
        </div>
        <div className="purchase-subtitle">
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
        <div className="cart-bottom">
          <div className="cart-total">
            <h3 className="total">Total:</h3>
            <span className="import">${totalCart()},99</span>
          </div>
        </div>
        <div className="cart-option">
          <div to={"/login"} className="close-buy" onClick={saveOrder}>
            Confirmar compra
          </div>
        </div>
      </div>
    </>
  );
};
