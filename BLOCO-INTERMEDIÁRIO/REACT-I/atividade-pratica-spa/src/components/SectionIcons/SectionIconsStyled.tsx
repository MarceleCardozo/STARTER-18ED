import styled from "styled-components";

const SectionIconsStyled = styled.section`
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
`;

export default SectionIconsStyled;
