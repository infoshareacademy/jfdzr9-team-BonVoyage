import styled from "styled-components";

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 200px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TripWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: calc(100vh - 9.4rem);
  display: flex;
  flex-direction: row;
  padding: 10vw;
  @media (max-width: 1023px) {
    flex-direction: column;
    gap: var(--gap-s);
  }
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
