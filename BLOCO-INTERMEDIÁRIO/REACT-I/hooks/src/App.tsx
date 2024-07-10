import { AppRoutes } from "./routes/AppRoutes";
import ThemeDefault from "./theme/ThemeDefault";

export function App() {
  return (
    <ThemeDefault>
      <AppRoutes />
    </ThemeDefault>
  );
}
