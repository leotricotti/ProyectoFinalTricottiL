import { ButtonLanding } from "../ButtonLanding/ButtonLanding";
import styles from "../../CSS/landingPage.module.css";

export function LandingPage(props) {
  const imgDesktop = props.imgDesktop;
  const imgMobile = props.imgMobile;
  const link = props.link;

  return (
    <div className={styles.flex}>
      <section className={styles.heroContainer}>
        <img
          src={imgDesktop}
          alt="influencers"
          className={styles.heroDesktop}
        />
        <img src={imgMobile} alt="influencers" className={styles.heroMovil} />
      </section>
      <ButtonLanding link={link} />
    </div>
  );
}
