import { useState, useContext } from "react";
import { useAuth } from "../../components/Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../components/Context/CartContext";
import sendImg from "../../assets/images/sends/sends.jpg";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "../../CSS/login.css";

export const Login = () => {
  const { cartArray, totalCart } = useContext(CartContext);
  const [cartId, setCartId] = useState(null);
  const total = totalCart();
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const checkOut = () => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  const userSettins = () => {
    setCurrentUser({
      ...currentUser,
      email: "tricottileo@gmail.com",
      password: "tricottileo",
    });
  };

  const handleSubmit = async (e) => {
    userSettins();
    checkOut();
    e.preventDefault();
    setError("");
    try {
      await login(currentUser.email, currentUser.password);
      saveCart();
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  console.log(currentUser);

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
      <div className="login-container">
        <div className="top-line"></div>
        <div className="facebookLogin" onClick={handleSubmit}>
          <p>facebook login</p>
        </div>
        <div className="bottom-line">0</div>
        <div className="userData">
          <div className="email-container">
            <span className="email-title">Email</span>
            <p className="email">tricottiLeo@gmail.com</p>
          </div>
          <div className="pass-container">
            <span className="pass-title">Contraseña</span>
            <p className="pass">********</p>
          </div>
        </div>
        <div className="btn-login" onClick={handleSubmit}>
          <h3> Iniciar sesión </h3>
        </div>
        <div className="info-container">
          <img src={sendImg} alt="Envios gratis" className="info-img" />
          <h4 className="info-title">Envios Gratis</h4>
          <p className="info-text">A todo el país a partir de los $1.800,00</p>
        </div>
      </div>
    </>
  );
};
