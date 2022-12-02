import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { ItemCount } from "../../components/ItemCount/ItemCount";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { CartContext } from "../../components/Context/CartContext";
import { NavLink } from "react-router-dom";
import styles from "../../CSS/itemDetail.module.css";

export const ItemDetailContainer = () => {
  const MySwal = withReactContent(Swal);
  const [purchase, setPurchase] = useState(false);
  const state = useLocation();
  const { img, title, price, desc, stock } = state.state;
  const { addToCart } = useContext(CartContext);
  let initial = 1;
  let [count, setCount] = useState(initial);

  console.log(state);

  //función para sumar y modificar setCount
  const plusItem = () => {
    setCount((count += 1));
    if (count > stock) {
      MySwal.fire({
        position: "center",
        icon: "error",
        title: "Stock insuficiente",
        showConfirmButton: false,
        timer: 1700,
      });
      setCount((count = 0));
    }
  };

  //función para restar y modificar setCount
  const minusItem = () => {
    setCount((count -= 1));
    if (count <= 0) {
      MySwal.fire({
        position: "center",
        icon: "error",
        title: "Opción inválida",
        showConfirmButton: false,
        timer: 1700,
      });
      setCount((count = 0));
    }
  };

  const confirmAdd = (quantity) => {
    if (quantity <= 0) {
      MySwal.fire({
        position: "center",
        icon: "error",
        title: "Opción inválida",
        showConfirmButton: false,
        timer: 1700,
      });
    } else {
      MySwal.fire({
        position: "center",
        icon: "success",
        title: "Producto agregado con exito",
        showConfirmButton: false,
        timer: 1700,
      });
      addToCart(state.state, quantity);
      setPurchase(true);
    }
  };

  return (
    <div className={styles.detailContainer}>
      <img className={styles.detailImg} src={img} alt={title} />
      <div className={styles.detail}>
        <h1 className={styles.detailTitle}>{title}</h1>
        <p className={styles.detailDescription}>{desc}</p>
        <span className={styles.detailPrice}>$ {price},99</span>
        {purchase ? (
          <div>
            <div className={styles.text}>
              <NavLink to="/cart">
                <span className={styles.textColor}>Ir al Carrito</span>
              </NavLink>
            </div>
            <div className={styles.continue}>
              <NavLink to="/products">
                <span className={styles.continue}>Seguir comprando</span>
              </NavLink>
            </div>
          </div>
        ) : (
          <ItemCount
            plusItem={plusItem}
            minusItem={minusItem}
            count={count}
            confirmAdd={confirmAdd}
          />
        )}
      </div>
    </div>
  );
};
