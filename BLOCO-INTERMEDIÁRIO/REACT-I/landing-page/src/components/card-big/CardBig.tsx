import CardBigStyled from "./CardBigStyled";


interface CardBigPros {
  children?: React.ReactNode;
}

function CardBig({children}:CardBigPros) {
  return (
    <>
      <CardBigStyled>{children}</CardBigStyled>
    </>
  );
}

export default CardBig;
