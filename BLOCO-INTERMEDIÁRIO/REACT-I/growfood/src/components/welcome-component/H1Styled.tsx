import styled from "styled-components";

interface H1StyledProps {
    switchColor: boolean;
}

const H1Styled = styled.h1<H1StyledProps>`
    color: ${(props) => props.switchColor ? props.theme.colors.secondary : props.theme.colors.primary};
    font-family: sans-serif;
    font-size: xx-large;
    font-weight: 700;
`;

export default H1Styled;