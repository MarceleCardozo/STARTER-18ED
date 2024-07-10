import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export default Button;
