import styled from "styled-components";

const IconsWrapperStyled = styled.div`
  text-align: center;

  span {
    font-size: 80px;
    color: ${(props) => props.theme.primary};
  }
`;

export default IconsWrapperStyled;
