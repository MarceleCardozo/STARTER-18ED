import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#FF6C00",
    secondary: "#000000",
  },
};

interface ThemeDefaultProps {
  children: React.ReactNode;
}

function ThemeDefault({ children }: ThemeDefaultProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeDefault;
