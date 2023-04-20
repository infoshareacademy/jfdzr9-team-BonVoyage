import styled from "styled-components";

export const StyledForm = styled.form`
  flex: 1;
  display: flex;
  gap: var(--gap-m);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledFormDetails = styled.form`
  display: flex;
  gap: var(--gap-m);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
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
  box-shadow: 0px 0px 10px 1px rgba(85, 154, 64, 1);
`;
