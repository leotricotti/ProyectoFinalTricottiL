import img from "../../assets/images/banner/todo.webp";
import styles from "../../CSS/dropdownFilters.module.css";

export const FilterImg = () => {
  return (
    <div className={styles.bannerImg}>
      <img src={img} alt="Productos" />
    </div>
  );
};
