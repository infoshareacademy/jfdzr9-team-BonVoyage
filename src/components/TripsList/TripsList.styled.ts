import styled from "styled-components";

export const TripsListStyled = styled.article`
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* grid-template-rows: minmax(200px, 1fr); */
  /* /* grid-auto-rows: minmax(150px, 1fr); */

  justify-items: stretch;
  grid-gap: var(--gap-m);
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: var(--gap-xs);
  }
`;

export const SingleTripStyled = styled.div`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  min-width: 300px;
  min-height: 300px;
  margin: 0;
  padding: 0;
  border: 1px solid grey;
  border-radius: var(--border-radius-s);

  /* grid-area: 1 / 1 / 2 / 2; */
  /* &::before {
    content: "";
    padding-bottom: 100%;
    display: block;
    grid-area: 1 / 1 / 2 / 2; 
  }*/
  @media (max-width: 768px) {
    min-width: 150px;
    min-height: 150px;
  }
`;

export const ImgContainer = styled.div`
  position: relative;

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

  object-fit: cover;
  /* grid-area: 1 / 1 / 2 / 2; */
  border-radius: var(--border-radius-s);
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
