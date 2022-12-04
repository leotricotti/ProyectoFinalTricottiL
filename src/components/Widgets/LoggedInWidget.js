import userImg from "../../assets/images/user/user.jpg";
import { NavLink } from "react-router-dom";
import "../../CSS/loggedInWidget.css";

export const LoggedInWidget = () => {
  return (
    <div className="user-container">
      <img src={userImg} alt="Informacion de usuario" className="user-img" />
      <div className="sesion-info">
        <NavLink to={"/"} className="btn-logout">
          <span className="close-seccion">Cerrar sesión</span>
        </NavLink>
      </div>
    </div>
  );
};
