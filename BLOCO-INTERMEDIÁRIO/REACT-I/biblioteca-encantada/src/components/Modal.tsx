import React from "react";
import ButtonDefault from "./ButtonDefault";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  action: () => void;
  actionConfirm: () => void;
}

function Modal({ title, children, action, actionConfirm }: ModalProps) {
  return (
    <ModalStyled>
      <div
        style={{
          height: "300px",
          width: "400px",
          backgroundColor: "#fff",
          color: "#333",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h2>{title}</h2>
        </div>

        <div>{children}</div>
        <div>
          <ButtonDefault action={action} label="Cancelar" />
          <ButtonDefault label="Confirmar" action={actionConfirm} />
        </div>
      </div>
    </ModalStyled>
  );
}

export default Modal;
