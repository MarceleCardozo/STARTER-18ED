import React from "react";
import { BsLaptop, BsLayers, BsCheck2Circle } from "react-icons/bs";
import IconsWrapper from "../IconsWrapper/IconsWrapper";
import SectionIconsStyled from "./SectionIconsStyled";

const SectionIcons: React.FC = () => {
  return (
    <SectionIconsStyled>
      <IconsWrapper
        icon={<BsLaptop />}
        titulo="Somente para laptop"
        texto="Vamos aprender como usar um framework"
      />
      <IconsWrapper
        icon={<BsLayers />}
        titulo="Criado com componentes"
        texto="Utilizamos o Styled Components."
      />
      <IconsWrapper
        icon={<BsCheck2Circle />}
        titulo="Fácil aproveitamento"
        texto="Estamos no caminho."
      />
    </SectionIconsStyled>
  );
};

export default SectionIcons;
