import { NavLink } from "react-router-dom";
import { navBarMenuItems } from "../../assets/data/navBarMenuItems";
import styles from "../../CSS/navBar.module.css";

export function NavBarMenu({ close }) {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navItem}>
        {navBarMenuItems.map((item) => {
          return (
            <li key={item.title} className={styles.navList}>
              <NavLink onClick={close} to={item.category} className={styles.navLink}>
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
