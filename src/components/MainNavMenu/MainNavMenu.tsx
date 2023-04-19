import { NavMenuContainer, NavMenuDiv } from "./MainNavMenu.styled";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  if (bigScreen) {
    return (
      <>
        <NavMenuContainer hidden={!show}>
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
