import styled from "styled-components";

type ModalProps = {
  isModalActive: boolean;
};

export const ModalWrapper = styled.div<ModalProps>`
  display: ${({ isModalActive }) => (isModalActive ? "block" : "none")};
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(000, 000, 000, 0.4);
  z-index: 1;
  cursor: pointer;
  backdrop-filter: blur(4px);
`;

export const Wrapper = styled.div`
  position: fixed;
  background-color: white;
  border-radius: 5rem;
  padding: 2%;
  border: white 1px solid;
  width: fit-content;
  height: 80%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10%;
  }

  @media screen and (max-width: 768px) {
    border-radius: 5rem;
    width: 85%;
    height: 80%;
  }
  @media screen and (max-width: 992px) {
    border-radius: 5rem;
    width: 85%;
  }
`;
