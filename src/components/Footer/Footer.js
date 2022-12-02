import Facebook from "../../assets/images/social/facebook.png";
import Instagram from "../../assets/images/social/instagram.png";
import { NavLink } from "react-router-dom";
import "../../CSS/footer.css";

export const Footer = () => {
  return (
    <div className="gridContainer">
      <div className="socialNetwork">
        <h4 className="title">Seguinos</h4>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          className="facebook"
        >
          <img src={Facebook} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="instagram"
        >
          <img src={Instagram} alt="Instagram" />
        </a>
      </div>
      <div className="btn">
        <NavLink to="/stores">Encontranos</NavLink>
      </div>
    </div>
  );
};
