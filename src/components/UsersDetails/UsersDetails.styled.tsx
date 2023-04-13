import styled from "styled-components";

export const DetailsWrapper = styled.div`
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

export const Details = styled.section`
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  width: 140px;
  height: 140px;
  position: relative;
  grid-column-start: 1;
  grid-column-end: 2;
  border: 0;
  border-radius: 150%;
  object-fit: cover;
`;
