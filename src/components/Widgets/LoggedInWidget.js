import { useState } from "react";
import userImg from "../../assets/images/user/user.jpg";
import { NavLink } from "react-router-dom";
import "../../CSS/loggedInWidget.css";

export const LoggedInWidget = (logout) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="user-container">
      <img
        src={userImg}
        alt="Informacion de usuario"
        className="user-img"
        onClick={() => setToggle(!toggle)}
      />
      {toggle && (
        <div className="sesion-info" onClick={() => logout}>
          <NavLink to={"/"} className="btn-logout">
            <span className="close-seccion">Cerrar sesión</span>
          </NavLink>
        </div>
      )}
    </div>
  );
};
