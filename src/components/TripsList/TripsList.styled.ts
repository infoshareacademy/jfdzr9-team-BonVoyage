import styled from "styled-components";

export const TripsListStyled = styled.article`
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  /* grid-auto-rows: minmax(150px, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-items: stretch; */
  grid-gap: 1rem;
`;

export const SingleTripStyled = styled.div`
  display: grid;
  /* box-sizing: border-box;
  min-width: 150px;
  min-height: 150px; */
  margin: 0;
  padding: 0;
  border: 1px solid black;

  /* grid-area: 1 / 1 / 2 / 2; */
  &::before {
    content: "";
    padding-bottom: 100%;
    display: block;
    grid-area: 1 / 1 / 2 / 2;
  }
`;

export const AccountPageWrapper = styled.div`
  width: 70%;

  margin-left: auto;
  margin-right: auto;
`;

export const TripMini = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-area: 1 / 1 / 2 / 2;
`;
