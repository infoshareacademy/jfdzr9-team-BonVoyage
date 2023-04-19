import styled from "styled-components";

interface ButtonProps {
  secondary?: boolean;
  wide?: boolean;
  vwmax?: boolean;
  white?: boolean;
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
  padding: 1rem;
  text-transform: capitalize;
  transition: 0.2s linear;
  color: ${(props) => (props.white ? "var(--color-neutral-white)" : "var(--color-neutral-black)")};
  background-color: ${(props) => (props.secondary ? "var(--color-secondary-topaz)" : "transparent")};
  border: ${(props) => (props.secondary ? "1.5px solid #F39239" : "1.5px solid ")};
  :hover {
    background-color: var(--color-secondary-topaz-dark);
    border: 1.5px solid #c16316;
  }
`;

export const ButtonGrey = styled(Button)`
  background-color: var(--color-secondary-topaz-light);
  border: 1.5px solid #c16316;
  :hover {
    background-color: var(--color-secondary-topaz);
  }
`;
