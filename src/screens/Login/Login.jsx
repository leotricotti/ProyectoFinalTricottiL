import { useState } from "react";
import sendImg from "../../assets/images/sends/sends.jpg";
import { useAuth } from "../../components/Context/AuthContext";
import { useNavigate } from "react-router-dom";

import "../../CSS/login.css";

export function Login() {
  const { logout, user } = useAuth();
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(currentUser.email, currentUser.password);
      navigate("/cart");
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      {currentUser.length === 0 && (
        <div className="login-container">
          <div className="top-line"></div>
          <div className="facebookLogin">
            <p>facebook login</p>
          </div>
          <div className="bottom-line">0</div>
          <div className="userData">
            <div className="email-container">
              <span className="email-title">Email</span>
              <input className="email">tricottiLeo@gmail.com"</input>
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
            <p className="info-text">
              A todo el país a partir de los $1.800,00
            </p>
          </div>
        </div>
      )}
    </>
  );
}
