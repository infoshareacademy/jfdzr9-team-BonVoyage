import { Outlet } from "react-router-dom";

import { MainNavMenu } from "../MainNavMenu/MainNavMenu";
import { Footer } from "../Footer/Footer";

const year = new Date().getFullYear();
const LayoutMain = () => {
  return (
    <>
      <MainNavMenu />
      <main>
        <Outlet />
      </main>
      <Footer year={year} />
    </>
  );
};

export default LayoutMain;
