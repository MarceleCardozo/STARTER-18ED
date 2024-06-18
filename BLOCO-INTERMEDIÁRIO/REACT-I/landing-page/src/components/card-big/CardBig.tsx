import CardBigStyled from "./CardBigStyled";
import CellImg from "../../assets/celular.png";

interface CardBigPros {
  children: React.ReactNode;
}

function CardBig({ children }: CardBigPros) {
  return (
    <>
      <CardBigStyled>{children}</CardBigStyled>
      <CardBigStyled image={CellImg}></CardBigStyled>
    </>
  );
}

export default CardBig;
