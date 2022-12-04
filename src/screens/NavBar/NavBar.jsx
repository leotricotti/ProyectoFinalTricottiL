import React, { useState } from "react";
import logo from "../../assets/images/logo/converse.webp";
import { CartWidget } from "../../components/Widgets/CartWidget";
import { NavToggle } from "../../components/Widgets/NavToggle";
import { NavBarMenu } from "../../components/NavBarMenu/NavBarMenu";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../components/Context/AuthContext";
import styles from "../../CSS/navBar.module.css";

export function NavBar() {
  const { logout } = useAuth();
  const [toggle, setToggle] = useState(false);
  const close = () => {
    if (toggle) {
      setToggle(!toggle);
    }
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.navToggle}>
        <NavToggle action={() => setToggle(!toggle)} />
      </div>
      <div className={styles.navRight}>
        <div className={styles.logoContainer}>
          <NavLink to="/">
            <img src={logo} alt="Logo" className={styles.headerLogo} />
          </NavLink>
        </div>
        {toggle && (
          <div className={styles.navMobile}>
            <NavBarMenu close={close} />
          </div>
        )}
      </div>
      <div className={styles.navDesktop}>
        <NavBarMenu />
      </div>
      <div className={styles.headerLeft}>
        <NavLink to="login" className={styles.navLogin}>
          <p>Iniciar sesión /</p>
        </NavLink>
        <NavLink to="/cart" className={styles.cart}>
          <p>Cart</p>
          <CartWidget />
        </NavLink>
      </div>
    </header>
  );
}
