import React from "react";
import TitlePage from "../components/TitlePage";
import DivStyled from "../components/DivStyles";
import CardSmall from "../components/card-small/CardSmall";
import screen from "../assets/screen.png";
import levels from "../assets/levels.png";
import check from "../assets/check.png";
import DivRowFlex from "../components/card-small/DivRowFlex";

const Home: React.FC = () => {
  return (
    <>
      <DivStyled>
        <TitlePage title="Minha primeira página com react." />
      </DivStyled>
      <DivRowFlex>
        <CardSmall>
          <img src={screen}></img>
          <h2>Somente para desktop</h2>
          <p>Vamos aprender, como utilizar um framework.</p>
        </CardSmall>
        <CardSmall>
          <img src={levels}></img>
          <h2>Criado com componentes</h2>
          <p>Utilizamos o Styled Components.</p>
        </CardSmall>
        <CardSmall>
          <img src={check}></img>
          <h2>Fácil aproveitamento</h2>
          <p>Estamos no caminho.</p>
        </CardSmall>
      </DivRowFlex>

      <DivStyled height="200px">
        <TitlePage title="Contato." />
      </DivStyled>
    </>
  );
};

export default Home;
