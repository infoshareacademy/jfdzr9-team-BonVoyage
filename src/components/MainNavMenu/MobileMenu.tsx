import { StyledMenu } from "./Mobilemenu.style";
import { Link, NavLink } from "react-router-dom";
import { useUser, useLogout } from "../../context/auth.context";
import { useState } from "react";
import { Header2 } from "../../ui/headers/header.styled";

interface Props {
  open: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export const Menu: React.FC<Props> = ({ open, onClose }) => {
  const logout = useLogout();
  const user = useUser();

  const handleLogout = async () => {
    await logout();
    onClose();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <Link to="/">
        <Header2 bold>Bon Voyage</Header2>
      </Link>
      {user ? (
        <StyledMenu open={open}>
          <a href="/">Home</a>
          <Link to="/voyages" onClick={handleClose}>
            Voyages
          </Link>
          <NavLink to="/about" onClick={handleClose}>
            About Us
          </NavLink>
          <Link to="/account" onClick={handleClose}>
            {" "}
            Your Profile
          </Link>
          <a href="" onClick={handleLogout}>
            Logout
          </a>
        </StyledMenu>
      ) : (
        <StyledMenu open={open}>
          <a href="/">Home</a>
          <Link to="/voyages" onClick={handleClose}>
            Voyages
          </Link>
          <NavLink to="/about" onClick={handleClose}>
            About Us
          </NavLink>
          <Link to="signIn" onClick={handleClose}>
            Sign in
          </Link>
          <Link to="/signIn/register" onClick={handleClose}>
            Register
          </Link>
        </StyledMenu>
      )}
    </>
  );
};
