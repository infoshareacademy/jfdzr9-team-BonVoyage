import styled from "styled-components";

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 300px;
`;

export const TripWrapper = styled.div`
  height: calc(100vh - 16rem);
  min-height: calc(100vh -16rem);
  display: flex;
  flex-direction: row;
  gap: var(--gap-l);

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: var(--gap-m);
  }
`;

export const Title = styled.h2`
  text-align: center;
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
  width: 100%;
  text-align: justify;
`;
