import React from "react";
import TitlePage from "../components/TitlePage";
import HeaderStyled from "../components/HeaderStyles";
import CardSmall from "../components/card-small/CardSmall";
import screen from "../assets/screen.png";
import levels from "../assets/levels.png";
import check from "../assets/check.png";
import DivRowFlex from "../components/card-small/DivRowFlex";

const Home: React.FC = () => {
  return (
    <>
      <HeaderStyled>
        <TitlePage title="Minha primeira página com react." />
      </HeaderStyled>
      <DivRowFlex>
        <CardSmall>
          <img src={screen}></img>
          <h3>Somente para desktop</h3>
          <p>Vamos aprender, como utilizar um framework.</p>
        </CardSmall>
        <CardSmall>
          <img src={levels}></img>
          <h3>Criado com componentes</h3>
          <p>Utilizamos o Styled Components.</p>
        </CardSmall>
        <CardSmall>
          <img src={check}></img>
          <h3>Fácil aproveitamento</h3>
          <p>Estamos no caminho.</p>
        </CardSmall>
      </DivRowFlex>
    </>
  );
};

export default Home;
