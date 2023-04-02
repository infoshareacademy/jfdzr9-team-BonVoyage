import { MainNavMenu } from "../components/MainNavMenu/MainNavMenu";
import { Footer } from "../components/Footer/Footer";

const AccountPage = () => {
  return (
    <>
      <MainNavMenu />
      <h1>Hello from your account!</h1>
      <Footer year={2023} />
    </>
  );
};

export default AccountPage;
