import styled from "styled-components";

export const NavMenuContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #cfe5d6;
  height: 8vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  z-index: 999;

  ul {
    display: flex;
    list-style: none;
    color: white;
  }

  li {
    margin-right: 20px;
    color: white;
    transition: all 0.3s ease-in-out;

    &:last-child {
      margin-right: 0;
    }
  }

  li:hover {
    transform: scale(1.07);
    transition: all 0.3s ease-in-out;
  }

  a {
    color: #4a6a2b;
    text-decoration: none;
    font-size: 20px;
    padding-right: 20px;
  }

  a:hover {
    color: #415c26;
    text-decoration: underline;
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
