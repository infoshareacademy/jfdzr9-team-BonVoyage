import { ModalBox, ModalOverlay } from "./Modal.style";
import React, { ReactNode } from "react";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export function Modal(props: ModalType) {
  return (
    <>
      <ModalOverlay onClick={props.toggle}>
        <ModalBox>{props.children}</ModalBox>
      </ModalOverlay>
    </>
  );
}
