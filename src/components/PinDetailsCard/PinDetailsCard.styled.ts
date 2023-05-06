import styled from "styled-components";

export const PlaceWrapper = styled.div`
  min-width: 20vw;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  padding: 2vw;
  gap: 5vh;
`;

export const PhotoHeader = styled.img`
  width: 100%;
  height: 40%;
  object-fit: cover;
`;

export const Gallery = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const TripDescription = styled.p`
  width: 100%;
  text-align: justify;
`;
