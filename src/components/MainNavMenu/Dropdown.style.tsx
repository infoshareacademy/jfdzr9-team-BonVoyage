import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: var(--color-neutral-white-opacity);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 120px;
`;

export const DropdownListItem = styled.li`
  padding: var(--padding-search-bar-items);
  color: var(--color-neutral-black);

  p {
    color: var(--color-neutral-black);
  }
`;

export const LinkStyle = styled(Link)`
  font-size: var(--font-size-body);
  text-decoration: none;
  color: var(--color-neutral-black);

  :hover {
    text-decoration: none;
  }
`;
