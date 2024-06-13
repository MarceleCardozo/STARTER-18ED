import React from "react";
import CardSmallStyled from "./CardSmallStyled";

interface CardSmallProps {
  children: React.ReactNode;
}

function CardSmall({children}: CardSmallProps) {
  return (
    <>
      <CardSmallStyled>{children}</CardSmallStyled>
    </>
  );
}

export default CardSmall;
