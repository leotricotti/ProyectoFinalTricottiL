import userImg from "../../assets/images/user/user.jpg";
import "../../CSS/loggedInWidget.css";

export const LoggedInWidget = () => {
  return (
    <div className="user-container">
      <img src={userImg} alt="Informacion de usuario" className="user-img" />
      <div className="sesion-info">
        <button className="btn-logout">
          <span>Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
};
