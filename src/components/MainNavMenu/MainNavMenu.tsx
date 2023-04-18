import { NavMenuContainer, NavMenuDiv } from "./MainNavMenu.styled";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "../../hooks/UseMediaQuery";
import { Burger } from "./MobileMainNav";
import { Menu } from "./MobileMenu";
import { Dropdown } from "./Dropdown";

interface NavigationProps {
  something?: string;
}

export const MainNavMenu: React.FC<NavigationProps> = (): JSX.Element => {
  const bigScreen = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(false);

  if (bigScreen) {
    return (
      <>
        <NavMenuContainer>
          <NavMenuDiv>
            <h2>Bon Voyage</h2>
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
            </ul>
            <Dropdown />
          </NavMenuDiv>
        </NavMenuContainer>
        <div>
          <br />
          <br />
          <br />
        </div>
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
