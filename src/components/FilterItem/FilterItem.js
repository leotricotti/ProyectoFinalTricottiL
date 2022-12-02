import { NavLink } from "react-router-dom";
import "../../CSS/filterItem.css";

export const FilterItem = ({ id, url, title, handleInput }) => {
  return (
    <li key={id} className="subMenuItem">
      <div className="subMenuLabel" onClick={() => handleInput}>
        <NavLink to={url} className="flex">
          <span className="subMenuText">{title}</span>
        </NavLink>
      </div>
    </li>
  );
};
