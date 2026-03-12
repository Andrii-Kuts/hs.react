import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";
import { BrowserRouter } from "react-router";

const root = document.getElementById("root");

if (root == null) {
  throw new Error("Root is null!");
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
