import { App } from "./App.tsx";
import { createRoot } from "react-dom/client";
import { TodoProvider } from "./components/context/TodoProvider.tsx";
import "./index.css";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
