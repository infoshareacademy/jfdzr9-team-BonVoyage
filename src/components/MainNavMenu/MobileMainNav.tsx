import React from "react";
import { StyledBurger } from "./MobileMainNav.style";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const Burger: React.FC<Props> = ({ setOpen, open }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
