import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#ff7e5f",
    secondary: "#feb47b",
  },
};

interface ThemeDefaultProps {
  children: React.ReactNode;
}

function ThemeDefault({ children }: ThemeDefaultProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default ThemeDefault;
