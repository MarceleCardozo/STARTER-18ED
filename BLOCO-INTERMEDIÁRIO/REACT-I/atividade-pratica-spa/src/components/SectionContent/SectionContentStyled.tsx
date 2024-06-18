import styled from "styled-components";

interface SectionProps {
  ordem?: boolean;
}

const SectionContentStyled = styled.section<SectionProps>`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.ordem ? "row-reverse" : "row")};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
`;

export default SectionContentStyled;
