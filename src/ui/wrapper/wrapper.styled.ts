import styled from "styled-components";

export const WrapperStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const AccountPageWrapper = styled.div`
  margin-top: 0.5rem;
  padding: var(--padding-layout);
`;

export const ButtonsJumbotronWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--gap-m);
`;

export const ButtonsSignIntronWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--gap-m);
`;

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10%;
  padding: var(--padding-layout);
  height: calc(100vh - 8rem);
  margin-top: 5.4rem;
`;

export const ImgWrapper = styled.div`
  flex: 1;
`;
