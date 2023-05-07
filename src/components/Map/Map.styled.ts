import styled from "styled-components";

export const FullWrapper = styled.div`
  height: calc(100vh - 9.4rem);
  margin-top: 6.8rem;
  width: 100vw;
  display: flex;
  padding: var(--padding-layout);
  gap: var(--gap-l);
`;

export const SearchbardWrapper = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 50px;
  gap: var(--gap-m);
`;
export const MapWrapper = styled.div`
  width: 70%;
  height: 100%;
`;
