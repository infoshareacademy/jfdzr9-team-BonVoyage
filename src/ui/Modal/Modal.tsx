import { ReactNode } from "react";
import { ModalWrapper, Overlay, Wrapper } from "./Modal.styled";

type ModalProps = {
  children: ReactNode;
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  isModalActive: boolean;
};

const Modal = ({ children, setIsModalActive, isModalActive }: ModalProps) => {
  return (
    <ModalWrapper isModalActive={isModalActive}>
      <Overlay onClick={() => setIsModalActive(false)} />
      <Wrapper>{children}</Wrapper>
    </ModalWrapper>
  );
};

export default Modal;
