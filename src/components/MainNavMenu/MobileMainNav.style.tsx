import styled from "styled-components";

interface Props {
  open: boolean;
}

export const StyledBurger = styled.button<Props>`
  width: var(--line-height-body);
  height: var(--line-height-body);
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 9999;
  display: none;
  border: none;
  cursor: pointer;
  background: transparent;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: var(--line-height-body);
    height: 0.3rem;
    background-color: ${({ open }) => (open ? "#030303" : "#c4c4c4")};
    border-radius: 10px;
    z-index: 9999;
    transform-origin: 1px;
    transition: all 0.3s linear;
    position: relative;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
