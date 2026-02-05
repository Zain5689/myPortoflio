import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter";
import { ThemeContextProvider } from "./context/themeContextProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    <AppRouter />
  </ThemeContextProvider>,
);
