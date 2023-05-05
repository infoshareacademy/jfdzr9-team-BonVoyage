import { Link } from "react-router-dom";
import styled from "styled-components";

export const TripsListStyled = styled.article`
  transition: 0.2s linear;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: stretch;
  grid-gap: var(--gap-m);

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: var(--gap-xs);
  }
`;

export const SingleTripStyled = styled.div`
  position: relative;
  display: grid;
  /* width: 100%;
  box-sizing: border-box; */
  margin: 0;
  padding: 0;
  border: 1px solid grey;
  border-radius: var(--border-radius-s);
  /* grid-area: 1 / 1 / 2 / 2; */

  @media (max-width: 768px) {
    grid-column: 1 / 2;
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  z-index: 0;

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const TripMini = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 20;
  object-fit: cover;
  /* grid-area: 1 / 1 / 2 / 2; */
  border-radius: var(--border-radius-s);
  :hover {
    z-index: 10;
  }
`;

export const TripMiniTitle = styled.h3`
  position: relative;
  color: black;
  justify-self: flex-start;
  padding: 5%;
  margin: 0;

  /* &::before {
    content: "";
    width: 100%;
    display: block;
    background-color: black;
    height: 20px;
    margin: 0;
    padding: 0;
  } */
`;

export const TripDescription = styled.p`
  padding: 5%;
  padding-top: 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-height: calc(var(--line-height-body) * var(--max-lines));
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ButtonsSection = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 15;
  display: flex;
  justify-content: center;
  gap: var(--gap-s);
  :hover {
    z-index: 25;
  }
`;

export const TripButton = styled.button`
  width: 9rem;
  height: 6rem;
  border-radius: var(--border-radius-s);
  background-color: var(--color-neutral-white-opacity);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-weight: 600;
  color: var(--color-secondary-topaz-light);
  text-shadow: 2px 2px 5px rgba(0, 1, 8, 1);
  :hover {
    background-color: var(--color-secondary-topaz-light);
    color: var(--color-neutral-white);
  }
`;
