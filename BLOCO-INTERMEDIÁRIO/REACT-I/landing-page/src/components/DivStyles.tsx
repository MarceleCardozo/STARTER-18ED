import styled from "styled-components";
import ImgMar from "../assets/mar.jpg";

interface DivStyledProps {
  height?: string;
}

const DivStyled = styled.div<DivStyledProps>`
  background-image: url(${ImgMar});
  height: ${({ height }) => height ?? "350px"};
  background-size: cover;
  background-position: bottom;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: x-large;
`;
export default DivStyled;
