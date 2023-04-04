import { Outlet } from "react-router-dom";
import { Layout } from "./Layout.styled";
import { MainNavMenu } from "../MainNavMenu/MainNavMenu";
import { Footer } from "../Footer/Footer";

const year = new Date().getFullYear();
const LayoutMain = () => {
  return (
    <Layout>
      <MainNavMenu />
      <main>
        <Outlet />
      </main>
      <Footer year={year} />
    </Layout>
  );
};

export default LayoutMain;
