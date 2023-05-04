import styled from "styled-components";

export const WrapperStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AccountPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5.4rem;
  width: 100vw;
  min-height: calc(100vh - 8rem);
  padding: var(--padding-layout);
  gap: var(--gap-m);

  @media (max-width: 768px) {
    padding: var(--padding-layout-mobile);
  }
`;

export const EditProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5.4rem;
  width: 100vw;
  min-height: calc(100vh - 8rem);
  padding: var(--padding-layout);
  align-items: center;
  justify-content: center;
`;

export const ButtonsJumbotronWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--gap-m);
`;

export const ButtonsRowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: var(--gap-m);
`;

export const ButtonsUploadImgWrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: var(--gap-s);
  flex: 1;
`;

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10%;
  padding: var(--padding-layout);
  height: calc(100vh - 8rem);
  margin-top: 5.4rem;
`;

interface WrapperProps {
  vwmax?: boolean;
  padding?: boolean;
}

export const FormWrapper = styled.div<WrapperProps>`
  width: ${(props) => (props.vwmax ? "100%" : "50%")};
  height: calc(100vh - 8rem);

  padding: ${(props) => (props.padding ? "var(--padding-layout)" : "0")};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  flex: 1;
`;
