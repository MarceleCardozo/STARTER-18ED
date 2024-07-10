import { useEffect, useState } from "react";
import BeautifulParagraph from "../components/paragraph";
import BeautifulTitle from "../components/title";

function Home() {
  const [message, setMessage] = useState<string>("Carregando...");

  useEffect(() => {
    setMessage("Bem-vindo ao meu projeto bonito!");
  }, []);

  return (
    <div className="App">
      <BeautifulTitle>Meu Projeto Bonito</BeautifulTitle>
      <BeautifulParagraph>{message}</BeautifulParagraph>
    </div>
  );
}

export default Home;
