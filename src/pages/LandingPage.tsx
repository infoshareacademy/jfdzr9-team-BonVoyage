import { MainNavMenu } from "../components/MainNavMenu/MainNavMenu";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";
import { Carousel } from "../components/Carousel/Carousel";
import { Footer } from "../components/Footer/Footer";
import { Team } from "../components/AboutUs/AboutUs";

export const LandingPage: React.FC = () => {
  return (
    <>
      <MainNavMenu />
      <Jumbotron />
      <Carousel />
      <Team />
      <Footer year={2023} />
    </>
  );
};
