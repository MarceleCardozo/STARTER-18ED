import styled from "styled-components";

interface CardBigStyledProps {
  images?: string;
}

const CardBigStyled = styled.div<CardBigStyledProps>`
  background: url(image);
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
`;

export default CardBigStyled;
