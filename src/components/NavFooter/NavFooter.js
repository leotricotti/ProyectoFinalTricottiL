import { navBarMenuItems } from "../../assets/data/navBarMenuItems";
import { NavLink } from "react-router-dom";
import "../../CSS/navFooter.css";

export const NavFooter = () => {
  return (
    <nav className="navFooter">
      <ul className="navItem">
        {navBarMenuItems.map((item) => {
          return (
            <li key={item.id} className="navList">
              <NavLink to={item.category} className="navLink">
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <p className="copyWright">
        {" "}
        © Converse - Copywright Leonardo Tricotti - Powered by ReactJS
      </p>
    </nav>
  );
};
