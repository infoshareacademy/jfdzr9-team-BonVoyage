import styled from "styled-components";

interface ButtonProps {
  secondary?: boolean;
  wide?: boolean;
  vwmax?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  gap: 0.7rem;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.vwmax ? "100%" : "auto")};
  font-size: var(--font-size-body);
  font-weight: 700;
  border-radius: var(--border-radius-m);
  padding: var(--padding-search-bar-items);
  text-transform: capitalize;
  transition: 0.2s linear;
  color: ${(props) => (props.secondary ? "var(--color-neutral-black)" : "var(--color-neutral-white)")};
  background-color: ${(props) => (props.secondary ? "transparent" : "black")};
  border: 1.5px solid black;
  :hover {
    color: var(--color-neutral-white);
    background-color: var(--color-secondary-topaz);
    border: 1.5px solid #f39239;
  }
`;

export const ButtonWhite = styled(Button)`
  color: ${(props) => (props.secondary ? "var(--color-neutral-white)" : "var(--color-neutral-black)")};
  background-color: ${(props) => (props.secondary ? "transparent" : "var(--color-neutral-white)")};
  border: 1.5px solid white;
`;

export const ButtonGrey = styled(Button)`
  background-color: var(--color-secondary-topaz-light);
  border: 1.5px solid #c16316;
  :hover {
    background-color: var(--color-secondary-topaz);
  }
`;
