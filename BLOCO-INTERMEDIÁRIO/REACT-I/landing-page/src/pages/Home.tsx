import React from "react";
import TitlePage from "../components/TitlePage";
import DivStyled from "../components/DivStyles";
import CardSmall from "../components/card-small/CardSmall";
import screen from "../assets/screen.png";
import levels from "../assets/levels.png";
import check from "../assets/check.png";
import DivRowFlex from "../components/card-small/DivRowFlex";
import CardBig from "../components/card-big/CardBig";
import CellImage from "../assets/celular.png";
import CardImageStyled from "../components/card-image/CardImageStyled";
import CardImage from "../components/card-image/CardImage";

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

      <DivRowFlex>



        <CardBig>
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum animi
            maxime temporibus cum magni, delectus libero! Perspiciatis quo nobis
            magni labore, earum, architecto, impedit deleniti voluptas velit
            temporibus tenetur iure! Beatae minus aperiam totam fugit doloribus
            voluptatibus, ad sequi! Voluptates odio labore, sint debitis harum
            recusandae neque mollitia, impedit rem rerum ratione officiis vel
            magnam placeat inventore facilis vero aut? Ad culpa, accusantium
            assumenda impedit at dignissimos quam nulla doloremque architecto
            corrupti consectetur ullam dicta excepturi a odio non nostrum
            nesciunt vel tenetur cupiditate soluta? Velit blanditiis minus ipsam
            repellendus. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Praesentium, dolore? Provident quisquam aut nam perspiciatis
            quasi sequi similique. Laboriosam adipisci voluptatibus nostrum
            magni reprehenderit sit unde autem perferendis, quam debitis! Ipsum
            cum hic, ratione voluptatibus placeat ipsam illum consequuntur iusto
            consectetur sapiente voluptates, perferendis alias sed maiores
            doloribus temporibus! Temporibus reiciendis voluptates esse fugiat
            doloribus fuga ab saepe exercitationem explicabo. Odio perspiciatis
            unde ut sunt. Dolores eaque, nulla accusamus placeat, voluptatum
            culpa, corporis nihil beatae perspiciatis a nostrum cum sint
            voluptatem aut laudantium tempore nobis harum hic alias!
            Reprehenderit, similique!
          </p>
        </CardBig>
        <CardImage >
        <img src={CellImage} alt="celular" />
        </CardImage>
      </DivRowFlex>

      <DivStyled height="200px">
        <TitlePage title="Contato." />
      </DivStyled>
    </>
  );
};

export default Home;
