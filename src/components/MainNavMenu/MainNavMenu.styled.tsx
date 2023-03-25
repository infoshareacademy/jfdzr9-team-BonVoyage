import styled from "styled-components";

export const NavMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  height: 8vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  z-index: 999;
`;

export const NavMenuDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavMenuItem = styled.ul`
  color: white;
  text-decoration: none;
  list-style-type: none;
  display: flex;
`;
