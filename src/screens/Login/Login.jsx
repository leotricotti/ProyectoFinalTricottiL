import { useState } from "react";
import { useAuth } from "../../components/Context/AuthContext";
import { useNavigate } from "react-router-dom";
import sendImg from "../../assets/images/sends/sends.jpg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "../../CSS/login.css";

export const Login = () => {
  const MySwal = withReactContent(Swal);
  const currentUser = {
    email: "tricottileo@gmail.com",
    password: "tricottileo",
  };
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    confirmLogin();
    setError("");
    e.preventDefault();
    try {
      await login(currentUser.email, currentUser.password);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const confirmLogin = () => {
    MySwal.fire({
      position: "center",
      icon: "success",
      title: "Bienvenido!!! Que deseas hacer?",
      showConfirmButton: true,
      confirmButtonText: "Ir al pago...",
      confirmButtonColor: "#555",
      showCancelButton: true,
      cancelButtonText: "Seguir, comprando",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/order");
      } else if (navigate("/products"));
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
