import styled from "styled-components";

export const PlaceWrapper = styled.div`
  min-width: 20vw;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  padding: 2vw;
  gap: 5vh;
`;

export const Gallery = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Title = styled.h1`
  text-align: center;
  height: 10%;
`;

export const TripDescription = styled.p`
  width: 100%;
  text-align: justify;
`;
