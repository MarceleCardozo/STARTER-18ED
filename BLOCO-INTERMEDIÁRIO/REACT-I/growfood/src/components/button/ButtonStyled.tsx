import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  width: 140px;
  height: 50px;
  padding: 10px;
  color: #fff;
`;

export default ButtonStyled;
