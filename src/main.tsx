import { App } from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodoProvider } from "./components/context/TodoProvider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </StrictMode>
);
