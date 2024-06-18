import React from "react";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import Banner from "../components/Banner/Banner";
import SectionContent from "../components/SectionContent/SectionContent";
import SectionIcons from "../components/SectionIcons/SectionIcons";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Banner titulo="Minha primeira página com ReactJs." />
      <SectionIcons />
      <SectionContent
        titulo="Titulo 1"
        texto="Este é um texto de exemplo para o conteúdo da PRIMEIRA section da página. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget mattis nulla. Praesent rutrum, mi eget tincidunt faucibus, magna libero viverra elit, ut tincidunt risus elit et massa."
        urlImage={img1}
      />
      <SectionContent
        titulo="Titulo 2"
        texto="Este é um texto de exemplo para o conteúdo da SEGUNDA section da página. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget mattis nulla. Praesent rutrum, mi eget tincidunt faucibus, magna libero viverra elit, ut tincidunt risus elit et massa."
        reverse
        urlImage={img2}
      />
      <SectionContent
        titulo="Titulo 3"
        texto="Este é um texto de exemplo para o conteúdo da TERCEIRA section da página. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eget mattis nulla. Praesent rutrum, mi eget tincidunt faucibus, magna libero viverra elit, ut tincidunt risus elit et massa."
        urlImage={img3}
      />
      <Banner titulo="Contato" />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
