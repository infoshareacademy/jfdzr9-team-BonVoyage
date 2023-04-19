import styled from "styled-components";

interface MenuProps {
  hidden?: boolean;
}

export const NavMenuContainer = styled.nav<MenuProps>`
  display: ${(props) => (props.hidden ? "none" : "flex")};
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: var(--color-neutral-white-opacity);
  transition: top 0.3s;
  padding: 0 1.8rem;

  ul {
    display: flex;
    list-style: none;
    color: var(--color-neutral-black);
  }

  a {
    text-decoration: none;
  }
`;

export const Li = styled.li`
  font-size: var(--font-size-body);
  margin-right: 20px;
  color: var(--color-neutral-black);
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.07);
    transition: all 0.3s ease-in-out;
  }
`;

export const NavMenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavMenuItem = styled.li`
  color: var(--color-neutral-white);
  background-color: var(--color-neutral-white);
  text-decoration: none;
  list-style-type: none;
  display: flex;
`;
