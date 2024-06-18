import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body{
        width: 100vw;
        overflow-x: hidden;
    }

    body::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        background-color: #707070;
    }

    body::-webkit-scrollbar-thumb {
        background: #b3b3b3;
        border-radius: 5px;
    }

`;
