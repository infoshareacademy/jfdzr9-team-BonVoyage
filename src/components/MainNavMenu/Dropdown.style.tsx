import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  padding-right: 25px;
`;

export const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 8px 16px;
`;

export const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 120px;
`;

export const DropdownListItem = styled.li`
  padding: 8px 16px;
  color: black;

  p {
    color: black;
  }
`;
