import chuck70 from "../../assets/images/tendencies/chuck.jpg";
import classicChuck from "../../assets/images/tendencies/classic-chuck.jpg";
import starChevron from "../../assets/images/tendencies/star-chevron.jpg";
import accessories from "../../assets/images/tendencies/accessories.jpg";
import { NavLink } from "react-router-dom";
import styles from "../../CSS/tendencies.module.css";

export const Tendencies = () => {
  return (
    <>
      <h2 className={styles.title}>Tendencias</h2>
      <div className={styles.gridContainer}>
        <NavLink to="sneakers">
          <div className={styles.tendenciesContainer}>
            <img src={chuck70} alt="Chuck 70" />
            <span>Chuck 70</span>
          </div>
        </NavLink>
        <NavLink to="sneakers">
          <div className={styles.tendenciesContainer}>
            <img src={classicChuck} alt="Classic Chuck" />
            <span>Classic Chuck</span>
          </div>
        </NavLink>
        <NavLink to="sneakers">
          <div className={styles.tendenciesContainer}>
            <img src={starChevron} alt="Star Chevron" />
            <span>Star Chevron</span>
          </div>
        </NavLink>
        <NavLink to="sportswear">
          <div className={styles.tendenciesContainer}>
            <img src={accessories} alt="Accessories" />
            <span>Indumentaria</span>
          </div>
        </NavLink>
      </div>
    </>
  );
};
