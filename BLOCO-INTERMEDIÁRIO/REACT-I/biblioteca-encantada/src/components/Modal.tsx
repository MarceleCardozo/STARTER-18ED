import React from "react";
import ButtonDefault from "./ButtonDefault";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  title: string;
  children: React.ReactNode;
}

function Modal({ title, children }: ModalProps) {
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
          <ButtonDefault label="Cancelar" />
          <ButtonDefault label="Confirmar" />
        </div>
      </div>
    </ModalStyled>
  );
}

export default Modal;
