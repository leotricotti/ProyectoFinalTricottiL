import { useState } from "react";
import sendImg from '../../assets/images/sends/sends.jpg'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../../CSS/login.css";

export function Login() {
  const auth = getAuth();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const email = "tricottiLeo@gmail.com";
  const password = "tricottiLeo";

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
    setLoginEmail(email);
    setLoginPassword(password);
  };

  return (
    <div className="login">
      <div className="top-line"></div>
      <div className="facebookLogin">
        <p>facebook login</p>
      </div>
      <div className="bottom-line">0</div>
      <div className="userData">
        <div className="email-container">
          <span className="email-title">Email</span>
          <p className="email">sotopro@gmail.com</p>
        </div>
        <div className="pass-container">
          <span className="pass-title">Contraseña</span>
          <p className="pass">********</p>
        </div>
      </div>
      <div className="btn-login" onClick={() => login}>
        <h3> Iniciar sesión </h3>
      </div>
      <div className="info-container">
        <img src={sendImg} alt="Envios gratis" className="info-img"/>
        <h4 className="info-title">Envios Gratis</h4>
        <p className="info-text">A todo el país a partir de los $1.800,00</p>
      </div>
    </div>
  );
}
