import HeroImg from "../../assets/images/hero/hero-desktop.jpg";
import HeroMovil from "../../assets/images/hero/hero-mobile .jpg";
import styles from "../../CSS/heroSection.module.css";

export function HeroSection() {
  return (
    <div className={styles.flex}>
      <section className={styles.heroContainer}>
        <img src={HeroImg} alt="influencers" className={styles.heroDesktop} />
        <img src={HeroMovil} alt="influencers" className={styles.heroMovil} />
      </section>
    </div>
  );
}
