import { NavMenuContainer, NavMenuItem, NavMenuDiv } from "./MainNavMenu.styled";
import { Link } from "react-router-dom";
// import { Carousel } from "../Carousel/Carousel";
// import { Team } from "../AboutUs/AboutUs";

interface NavigationProps {
  something?: string;
}

export const MainNavMenu: React.FC<NavigationProps> = (props): JSX.Element => {
  return (
    <>
      <NavMenuContainer>
        <NavMenuDiv>
          <h1>Bon Voyage</h1>
        </NavMenuDiv>
        <NavMenuDiv>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/voyages">Voyages</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </NavMenuDiv>
      </NavMenuContainer>
    </>
  );
};
