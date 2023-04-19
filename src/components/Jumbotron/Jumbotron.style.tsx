import styled from "styled-components";

export const JumbotronContainer = styled.div`
  background-image: url(https://firebasestorage.googleapis.com/v0/b/bonvoyage-e7ad8.appspot.com/o/website-backgrounds%2Froad.jpg?alt=media&token=9a0f65ff-9a27-4f67-aa23-a47a4dce0088);
  background-size: cover;
  background-position: left top;
  background-repeat: no-repeat;
  height: 100vh;
`;

export const JumbotronDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: var(--gap-m);
  padding: var(--padding-layout);
`;
