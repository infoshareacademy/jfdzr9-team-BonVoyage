import styled from "styled-components";

export const DetailsWrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: 100%;
  margin: 50px 0px;
  display: flex;
  gap: 70px;
  border-bottom: 1px solid grey;
`;

export const Details = styled.section`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  /* margin-top: 3rem;
  margin-bottom: 3rem; */
`;

export const Name = styled.div`
  /* width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: stretch; */
`;

export const Description = styled.div``;

export const Avatar = styled.img`
  width: 12rem;
  height: 12rem;
  /* margin: 3rem; */
  position: relative;
  border: 0;
  border-radius: 150%;
  object-fit: cover;
`;
