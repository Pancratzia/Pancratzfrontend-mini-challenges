import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App.jsx";

const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    background-color: ${props => props.theme.colors.bg};;
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    color: white;
  }
  `;

  const theme = {
    colors: {
      secondary: "#08002b",
      primary: "#b85600",
      bg: "#220045",
  },}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
