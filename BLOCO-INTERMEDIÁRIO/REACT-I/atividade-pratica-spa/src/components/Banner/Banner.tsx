import React from "react";
import BannerStyled from "./BannerStyled";

interface BannerProps {
  titulo: string;
}

const Banner: React.FC<BannerProps> = ({ titulo }) => {
  return (
    <BannerStyled>
      <h1>{titulo}</h1>
    </BannerStyled>
  );
};

export default Banner;
