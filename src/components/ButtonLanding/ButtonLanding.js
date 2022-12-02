import { NavLink } from 'react-router-dom';
import '../../CSS/buttonLanding.css';

export function ButtonLanding({ link }) {
  return (
    <NavLink to={link} className="heroBtn">
      <span>ver más</span> 
    </NavLink>
  );
}
