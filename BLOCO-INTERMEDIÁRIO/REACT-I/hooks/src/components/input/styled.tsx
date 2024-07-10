import styled from "styled-components";

const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 50%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 6px rgba(255, 126, 95, 0.5);
  }
`;

export default Input;
