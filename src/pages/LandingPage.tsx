import { MainNavMenu } from "../components/MainNavMenu/MainNavMenu";
import { Jumbotron } from "../components/Jumbotron/Jumbotron";
import { Carousel } from "../components/Carousel/Carousel";

export const LandingPage: React.FC = () => {
  return (
    <>
      <MainNavMenu />
      <Jumbotron />
      <Carousel />
    </>
  );
};
