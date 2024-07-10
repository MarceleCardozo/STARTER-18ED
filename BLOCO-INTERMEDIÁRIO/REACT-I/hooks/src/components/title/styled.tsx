import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  padding: 0.5em;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  margin-bottom: 1em;
`;

export default Title;
