import { NavMenuContainer, NavMenuItem, NavMenuDiv } from "./MainNavMenu.styled";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { Burger } from "./MobileMainNav";
import { Menu } from "./MobileMenu";

interface NavigationProps {
  something?: string;
}

interface MenuItem {
  title: string;
  url: string;
}

interface Props {
  menuItems: MenuItem[];
}

export const MainNavMenu: React.FC<NavigationProps> = (props): JSX.Element => {
  const bigScreen = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);
  if (bigScreen) {
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
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </NavMenuDiv>
        </NavMenuContainer>
      </>
    );
  } else {
    return (
      <>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </>
    );
  }
};
