import { StyledMenu } from "./Mobilemenu.style";
import { Link, NavLink } from "react-router-dom";
import { useUser, useLogout } from "../../context/auth.context";
import { useState } from "react";
import { Header2 } from "../../ui/headers/header.styled";
import path from "path";

interface Props {
  open: boolean;
  isOpen?: boolean;
  onClose: () => void;
}

export const Menu: React.FC<Props> = ({ open, onClose }) => {
  const logout = useLogout();
  const user = useUser();

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    {
      label: "Home",
      path: "/",
      onClick: handleClose,
    },
    {
      label: "Voyages",
      path: "/voyages",
      onClick: handleClose,
    },
    {
      label: "About Us",
      path: "/about",
      onClick: handleClose,
    },

    {
      label: "Sign in",
      path: "/signIn",
      onClick: handleClose,
    },
    {
      label: "Register",
      path: "signIn/register",
      onClick: handleClose,
    },
  ];

  const loggedInOptions = [
    {
      label: "Home",
      path: "/",
      onClick: handleClose,
    },
    {
      label: "Voyages",
      path: "/voyages",
      onClick: handleClose,
    },
    {
      label: "About Us",
      path: "/about",
      onClick: handleClose,
    },
    {
      label: "Your Profile",
      path: "/account",
      onClick: handleClose,
    },
    {
      label: "Logout",
      path: "/",
      onClick: handleLogout,
    },
  ];

  return (
    <>
      <Link to="/">
        <Header2 bold>Bon Voyage</Header2>
      </Link>
      {user ? (
        <StyledMenu open={open}>
          {loggedInOptions.map((option) => (
            <Link key={option.path} to={option.path} onClick={option.onClick}>
              {option.label}
            </Link>
          ))}
        </StyledMenu>
      ) : (
        <StyledMenu open={open}>
          {options.map((option) => (
            <Link key={option.path} to={option.path} onClick={option.onClick}>
              {option.label}
            </Link>
          ))}
        </StyledMenu>
      )}
    </>
  );
};
