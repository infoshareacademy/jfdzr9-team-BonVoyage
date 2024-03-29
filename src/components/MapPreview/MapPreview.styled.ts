import styled from "styled-components";

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 300px;
  @media (max-width: 1023px) {
    height: 300px;
  }
`;

export const TripWrapper = styled.div`
  /* height: 100%; */
  /* height: calc(100vh - 16rem); */
  /* min-height: calc(100vh -16rem); */
  display: flex;
  flex-direction: row;
  gap: var(--gap-l);

  @media (max-width: 1023px) {
    flex-direction: column;
    gap: var(--gap-l);
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

  ::-webkit-scrollbar {
    width: 10px;
    height: 10%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
    height: fit-content;
  }
`;
