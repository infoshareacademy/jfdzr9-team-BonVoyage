import { MainNavMenu } from "../components/MainNavMenu/MainNavMenu";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";
import { Carousel } from "../components/Carousel/Carousel";
import { Footer } from "../components/Footer/Footer";

export const LandingPage: React.FC = () => {
  return (
    <>
      <MainNavMenu />
      <Jumbotron />
      <Carousel />

      <Footer year={2023} />
    </>
  );
};
