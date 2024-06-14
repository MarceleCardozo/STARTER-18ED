import styled from "styled-components";

interface CardBigStyledProps {
  image?: string;
}

const CardBigStyled = styled.div<CardBigStyledProps>`
  background: url(image);
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 50%;
  height: 400px;
  padding: 50px 30px;
  justify-content: center;
`;

export default CardBigStyled;
