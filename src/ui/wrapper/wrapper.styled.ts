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
  margin-top: 6.8rem;
  width: 100vw;
  min-height: calc(100vh - 9.4rem);
  padding: var(--padding-layout);
  gap: var(--gap-m);

  @media (max-width: 768px) {
    padding: var(--padding-layout-mobile);
  }
`;

export const EditProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6.8rem;
  width: 100vw;
  min-height: calc(100vh - 9.4rem);
  padding: var(--padding-layout);
  align-items: center;
  justify-content: center;
`;

export const NewTripWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6.8rem;
  width: 100vw;
  min-height: calc(100vh - 9.4rem);
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
  height: calc(100vh - 9.4rem);
  margin-top: 6.8rem;
`;

interface WrapperProps {
  vwmax?: boolean;
  padding?: boolean;
}

export const FormWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.vwmax ? "100%" : "50%")};
  /* height: calc(100vh - 9.4rem); */
  gap: var(--gap-m);
  padding: ${(props) => (props.padding ? "var(--padding-layout)" : "0")};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ImgWrapper = styled.div`
  flex: 1;
`;

export const TripFinishedWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  margin-top: 6.8rem;

  min-height: calc(100vh - 9.4rem);
  padding: var(--padding-layout);
  gap: var(--gap-s);

  @media (max-width: 1023px) {
    padding: var(--padding-layout-mobile);
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: var(--gap-m);
`;
