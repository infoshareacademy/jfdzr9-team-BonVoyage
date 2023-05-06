import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #afafaf;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #1d532e;
  }

  &.active {
    border-bottom: 2px solid black;
  }
`;
