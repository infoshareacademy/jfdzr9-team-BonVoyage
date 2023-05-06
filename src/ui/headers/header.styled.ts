import styled from "styled-components";

interface HeaderProps {
  white?: boolean;
  bold?: boolean;
}

export const Header1 = styled.h1<HeaderProps>`
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  color: ${(props) => (props.white ? "var(--color-neutral-white)" : "var(--color-neutral-black)")};
`;

export const Header2 = styled.h2<HeaderProps>`
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  color: ${(props) => (props.white ? "var(--color-neutral-white)" : "var(--color-neutral-black)")};
`;

export const Header3 = styled.h3<HeaderProps>`
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  color: ${(props) => (props.white ? "var(--color-neutral-white)" : "var(--color-neutral-black)")};
`;
export const Header4Form = styled.h4<HeaderProps>`
  align-self: flex-start;
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  color: ${(props) => (props.white ? "var(--color-neutral-white)" : "var(--color-neutral-black)")};
`;

export const Header4 = styled.h4<HeaderProps>`
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  color: ${(props) => (props.white ? "var(--color-neutral-white)" : "var(--color-neutral-black)")};
`;

export const Logo = styled.h3<HeaderProps>`
  font-weight: ${(props) => (props.bold ? "700" : "400")};
  color: ${(props) => (props.white ? "var(--color-neutral-white)" : "var(--color-neutral-black)")};
`;
