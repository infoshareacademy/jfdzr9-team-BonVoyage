import styled from "styled-components";

export const FakeButton = styled.p`
  display: inline-block;
  text-align: center;
  font-size: var(--font-size-body);
  font-weight: 700;
  border-radius: var(--border-radius-s);
  padding: var(--padding-search-bar-items);
  text-transform: capitalize;
  transition: 0.2s linear;
  color: var(--color-neutral-black);
  border: 1px solid gray;
  background-color: transparent;
  border: 1.5px solid black;
  width: 100%;
  cursor: pointer;
  :hover {
    color: var(--color-neutral-white);
    background-color: var(--color-secondary-topaz);
    border: 1.5px solid #f39239;
  }
`;
