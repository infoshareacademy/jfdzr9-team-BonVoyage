import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #545454;
  font-size: 12px;
  font-weight: 400;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #000000;
  }

  &.active {
    border-bottom: 2px solid black;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
`;
