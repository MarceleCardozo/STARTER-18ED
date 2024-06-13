import React from "react";
import TitlePage from "../components/TitlePage";
import HeaderStyled from "../components/HeaderStyles";

const Home: React.FC = () => {
  return (
    <>
      <HeaderStyled>
        <TitlePage title="Minha primeira página com react." />
      </HeaderStyled>
    </>
  );
};

export default Home;
