import styled from "styled-components";
import ImgMar from "../assets/mar.jpg";

const HeaderStyled = styled.header`
  background-image: url(${ImgMar});
  height: 350px;
  background-size: cover;
  background-position: bottom;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: x-large;
`;
export default HeaderStyled;
