import { ReactNode } from "react";
import { ModalWrapper, Overlay, Wrapper } from "./Modal.styled";
import { Pin } from "../../components/Map/Map";

type ModalProps = {
  children: ReactNode;
  setIsModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  isModalActive: boolean;
  setSelectedPlace: React.Dispatch<React.SetStateAction<Pin | undefined>>;
};

const Modal = ({ children, setIsModalActive, isModalActive, setSelectedPlace }: ModalProps) => {
  return (
    <ModalWrapper isModalActive={isModalActive}>
      <Overlay
        onClick={() => {
          setIsModalActive(false);
          setSelectedPlace(undefined);
        }}
      />
      <Wrapper>{children}</Wrapper>
    </ModalWrapper>
  );
};

export default Modal;
