import { UserProfile } from "../components/UserProfile/UserProfile";
import { Footer } from "../components/Footer/Footer";
import { MainNavMenu } from "../components/MainNavMenu/MainNavMenu";
import { Carousel } from "../components/Carousel/Carousel";

export const ProfilePage = () => {
  return (
    <>
      <MainNavMenu />
      <UserProfile />
      <Carousel />
      <Footer year={2023} />
    </>
  );
};
