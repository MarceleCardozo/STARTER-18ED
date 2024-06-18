import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./config/GlobalStyle";
import AppRoutes from "./routes/AppRouter";

const themes = {
  dark: {
    color: "#f5f5f5",
    bgColor: "#333",
    primary: "#19def0",
  },

  light: {
    color: "#333",
    bgColor: "#f5f5f5",
    primary: "#6747b6e9",
  },
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={themes.dark}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
