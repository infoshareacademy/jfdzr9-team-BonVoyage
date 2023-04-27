import styled from "styled-components";

export const StyledForm = styled.form`
  flex: 1;
  display: flex;
  gap: var(--gap-m);
  flex-direction: column;
  /* border: 1px solid black; */
  align-self: center;
`;

export const StyledFormDetails = styled.form`
  display: flex;
  gap: var(--gap-m);
  flex-direction: column;
  width: 100%;
`;

export const StyledFormNewTrip = styled.form`
  margin: 10rem auto;
  padding: 2rem;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  border-radius: 2rem;
`;
