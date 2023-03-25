import { NavMenuContainer, NavMenuItem, NavMenuDiv } from "./MainNavMenu.styled";
import { Link, NavLink } from "react-router-dom";

export const MainNavMenu: React.FC = (): JSX.Element => {
  return (
    <>
      <NavMenuContainer>
        <NavMenuDiv>
          <h1>Logo</h1>
        </NavMenuDiv>
        <NavMenuDiv>
          <ul>
            <NavMenuItem>Home</NavMenuItem>
            <NavMenuItem>Voyages</NavMenuItem>
            <NavMenuItem>About Us</NavMenuItem>
          </ul>
        </NavMenuDiv>
      </NavMenuContainer>
    </>
  );
};
