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
  background-color: transparent;
  transition: top 0.3s;

  ul {
    display: flex;
    list-style: none;
    color: white;
  }

  li {
    margin-right: 20px;
    color: white;
    transition: all 0.3s ease-in-out;

    /* &:last-child {
      margin-right: 0;
    } */
  }

  li:hover {
    transform: scale(1.07);
    transition: all 0.3s ease-in-out;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    transform: scale(4);
    font-weight: 500;
  }
`;

export const NavMenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NavMenuItem = styled.li`
  color: white;
  background-color: white;
  text-decoration: none;
  list-style-type: none;
  display: flex;
`;
