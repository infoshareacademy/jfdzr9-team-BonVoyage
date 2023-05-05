import { StyledMenu } from "./Mobilemenu.style";
import { Link, NavLink } from "react-router-dom";
import { useUser, useLogout } from "../../context/auth.context";
import { useState } from "react";
import { Header2 } from "../../ui/headers/header.styled";

interface Props {
  open: boolean;
}

export const Menu: React.FC<Props> = ({ open }) => {
  const logout = useLogout();
  const user = useUser();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <Link to="/">
        <Header2 bold>Bon Voyage</Header2>
      </Link>
      {user ? (
        <StyledMenu open={open}>
          <a href="/">Home</a>
          <Link to="/voyages">Voyages</Link>
          <NavLink to="/about">About Us</NavLink>
          <Link to="/account"> Your Profile</Link>
          <a href="" onClick={handleLogout}>
            Logout
          </a>
        </StyledMenu>
      ) : (
        <StyledMenu open={open}>
          <a href="/">Home</a>
          <Link to="/voyages">Voyages</Link>
          <NavLink to="/about">About Us</NavLink>
          <Link to="signIn">Sign in</Link>
          <Link to="/signIn/register">Register</Link>
        </StyledMenu>
      )}
    </>
  );
};
