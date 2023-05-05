import styled from "styled-components";

export const MapWrapper = styled.div`
  width: 50%;
  height: 100%;
  min-width: 300px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TripWrapper = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 10vw;
`;
export const Title = styled.h1`
  text-align: center;
  height: 10%;
  margin-bottom: 10rem;
`;
export const TripSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 90%;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 40%;
  }
`;
export const TripDescription = styled.p`
  width: 50%;
  height: 100%;
  text-align: justify;
  padding: 0 2vw;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
