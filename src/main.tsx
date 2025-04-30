import { createRoot } from "react-dom/client";
import "./index.css";
import Popup from "./popup/Popup.tsx";
import { ThemeProvider } from "./popup/context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Popup />
  </ThemeProvider>
);
