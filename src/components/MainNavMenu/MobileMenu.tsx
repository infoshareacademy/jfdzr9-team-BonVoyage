import { StyledMenu } from "./Mobilemenu.style";
import { Link, NavLink } from "react-router-dom";

interface Props {
  open: boolean;
}

export const Menu: React.FC<Props> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Home</a>
      <Link to="/voyages">Voyages</Link>
      <NavLink to="/about">About Us</NavLink>
      <Link to="/login">Login</Link>
    </StyledMenu>
  );
};
