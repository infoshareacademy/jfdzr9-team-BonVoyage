import styled from "styled-components";

export const TripsListStyled = styled.article`
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  /* grid-template-rows: minmax(200px, 1fr); */
  /* /* grid-auto-rows: minmax(150px, 1fr); */
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-items: stretch;
  grid-gap: 1rem;
`;

export const SingleTripStyled = styled.div`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  min-width: 400px;
  min-height: 400px;
  margin: 0;
  padding: 0;
  border: 0;

  /* grid-area: 1 / 1 / 2 / 2; */
  &::before {
    content: "";
    padding-bottom: 100%;
    display: block;
    grid-area: 1 / 1 / 2 / 2;
  }
`;

export const TripMini = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-area: 1 / 1 / 2 / 2;
`;

export const TripMiniTitle = styled.h2`
  position: absolute;
  color: black;
  justify-self: center;
  background-color: white;
  padding: 10px;
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
