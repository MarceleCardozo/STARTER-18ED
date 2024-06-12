import React from "react";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

const Home: React.FC = () => {
  return (
    <>
      <h1>Growdev</h1>
      <Paragraph content="Qualquer coisa" />

      <Button label="Cancelar" />
      <Button label="Enviar" />
    </>
  );
};

export default Home;
