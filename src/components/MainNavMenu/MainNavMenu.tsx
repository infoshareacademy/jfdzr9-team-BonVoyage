import { NavMenuContainer, NavMenuItem, NavMenuDiv, TestDiv } from "./MainNavMenu.styled";
import { Link } from "react-router-dom";

interface NavigationProps {
  booba?: string;
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
      <TestDiv>
        <h1>aids</h1>
      </TestDiv>
    </>
  );
};
