import styled from "styled-components";

export const WrapperStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const AccountPageWrapper = styled.div`
  /* width: 80%; */
  margin: 5.4rem;
  margin-top: 0.5rem;
`;

export const ButtonsJumbotronWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--gap-m);
`;

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--gap-m);
  padding: var(--padding-layout);
  height: calc(100vh - 5.4rem);
  margin-top: 5.4rem;
`;
