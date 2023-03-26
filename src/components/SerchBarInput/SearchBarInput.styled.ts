import styled from "styled-components";

export const SearchBarWrapper = styled.div`
  width: 100%;
`;

export const SearchBar = styled.input`
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  outline: none;
  width: 100%;
`;

export const List = styled.ul`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid;
  border-radius: 10px;
`;

export const ListItem = styled.li`
  list-style: none;
  background-color: transparent;
  text-align: center;
  border-radius: 30px;
  :hover {
    background-color: lightgreen;
  }
`;

export const ListButton = styled.button`
  background-color: transparent;
  border: none;
`;
