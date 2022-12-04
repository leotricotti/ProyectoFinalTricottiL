import userImg from "../../assets/images/user/user.jpg";
import { useAuth } from "../Context/AuthContext";
import '../../CSS/loggedInWidget.css'

export const LoggedInWidget = () => {
  const { displayName } = useAuth();

  console.log(displayName);

  return (
    <div className="widget-container">
      <img src={userImg} alt="Informacion de usuario" className="userImg" />
    </div>
  );
};
