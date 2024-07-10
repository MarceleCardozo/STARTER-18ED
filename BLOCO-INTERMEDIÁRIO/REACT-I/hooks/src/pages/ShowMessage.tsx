import { useEffect, useState } from "react";
import BeautifulButton from "../components/button";
import BeautifulParagraph from "../components/paragraph";
import BeautifulTitle from "../components/title";

function ShowMessage() {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    if (showMessage) {
      alert("Mensagem Exibida!");
    }
  }, [showMessage]);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <>
      <BeautifulTitle>Mensagem</BeautifulTitle>
      <BeautifulButton onClick={toggleMessage}>
        {showMessage ? "Esconder Mensagem" : "Mostrar Mensagem"}
      </BeautifulButton>
      {showMessage && (
        <BeautifulParagraph>
          Essa aqui é a mensagem que aparecerá quando clicar no botão!
        </BeautifulParagraph>
      )}
    </>
  );
}

export default ShowMessage;
