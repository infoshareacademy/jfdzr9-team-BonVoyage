import styled from "styled-components";

interface HeaderProps {
  white?: boolean;
}

export const Header1 = styled.h1<HeaderProps>`
  color: ${(props) => (props.white ? "var(--color-neutral-white)" : "var(--color-neutral-black)")};
`;

export const Header2 = styled.h2<HeaderProps>`
  color: ${(props) => (props.white ? "var(--color-neutral-white)" : "var(--color-neutral-black)")};
`;
