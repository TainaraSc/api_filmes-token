import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Arial', sans-serif;
        background-color: #f8f9fa; /* Fundo mais claro */
        color: #495057; /* Cor de texto mais escura */
        line-height: 1.6; /* Espaçamento entre linhas */
    }

    a {
        text-decoration: none;
        color: #007bff; /* Cor padrão para links */
        transition: color 0.2s ease-in-out; /* Transição suave de cor */
    }

    a:hover {
        color: #0056b3; /* Cor do link ao passar o mouse */
    }

    ul {
        list-style-type: none;
    }

    button {
        cursor: pointer;
        border: none; /* Remover borda padrão */
        background-color: #007bff; /* Cor de fundo para botões */
        color: #fff; /* Cor do texto dos botões */
        padding: 0.75rem 1.5rem; /* Preenchimento dos botões */
        border-radius: 4px; /* Borda arredondada */
        transition: background-color 0.2s ease-in-out; /* Transição suave de cor de fundo */
    }

    button:hover {
        background-color: #0056b3; /* Cor do botão ao passar o mouse */
    }

    #root {
        position: relative;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Alinhar conteúdo verticalmente */
    }

    footer {
        background-color: #343a40; /* Cor de fundo do footer */
        color: #fff; /* Cor do texto do footer */
        padding: 1rem;
        text-align: center;
    }
`;
