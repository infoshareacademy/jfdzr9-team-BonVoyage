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
  opacity: 0.5;
  background-color: black;
  z-index: 10;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  position: fixed;
  background-color: white;
  border-radius: 25%;
  padding: 2%;
  border: white 1px solid;
  width: fit-content;
  height: fit-content;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
`;
