import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  height: 50vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  display: flex;
  align-items: center;
  justify-content: space-around;

  li {
    list-style: none;
    display: inline-flex;
    margin: 10px;
  }

  small {
    margin-left: 10px;
  }

  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: 900;
    color: ${(props) => props.theme.primary};
  }

  span {
    font-size: 24px;
    color: ${(props) => props.theme.primary};
    margin: 5px;
  }
`;

export default FooterStyled;
