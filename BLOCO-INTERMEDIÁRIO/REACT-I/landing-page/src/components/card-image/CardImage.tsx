import React from "react";
import CardImageStyled from "./CardImageStyled";


interface CardImageProps {
    children: React.ReactNode
}

function CardImage({children}:CardImageProps) {
  return (
    <>
      <CardImageStyled>{children}</CardImageStyled>
    </>
  );
}

export default CardImage;
