import { LandingPage } from "../../components/LandingPage/LandingPage";
import NextMobile from "../../assets/images/create/create-mobile.jpg";
import NextDesktop from "../../assets/images/create/create-desktop.jpg";
import HeroDesktop from "../../assets/images/hero/hero-desktop.jpg";
import HeroMobile from "../../assets/images/hero/hero-mobile .jpg";
import { Tendencies } from "../../components/Tendencies/Tendencies";

export const HomePage = () => {
  return (
    <>
      <LandingPage
        imgDesktop={HeroDesktop}
        imgMobile={HeroMobile}
        link={"products"}
      />
      <Tendencies />
      <LandingPage
        imgDesktop={NextDesktop}
        imgMobile={NextMobile}
        link={"accessories"}
      />
    </>
  );
};
