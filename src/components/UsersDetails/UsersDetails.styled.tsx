import styled from "styled-components";

export const DetailsWrapper = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  height: 100%;
  margin: 50px 0px;
  display: flex;
  gap: 10%;
  border-bottom: 1px solid grey;
  align-content: space-between;
`;

export const Details = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  gap: 10px;

  /* margin-top: 3rem;
  margin-bottom: 3rem; */
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: stretch;
`;

export const Description = styled.div``;

export const Avatar = styled.img`
  width: 20rem;
  height: 20rem;
  display: inline-block;

  position: relative;
  border: 0;
  border-radius: 150%;
  object-fit: cover;
`;
