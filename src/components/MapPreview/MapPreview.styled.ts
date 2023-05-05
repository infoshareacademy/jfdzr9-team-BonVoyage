import styled from "styled-components";

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export const TripWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--gap-l);
  padding: var(--padding-layout);
  min-height: calc(100vh - 9.4rem);
  margin-top: 6.8rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--gap-s);
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: var(--gap-m);
`;

export const Title = styled.h2`
  text-align: center;
`;
export const TripSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 90%;
`;
export const TripDescription = styled.p`
  text-align: justify;
`;
