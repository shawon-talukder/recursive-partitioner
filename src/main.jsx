import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { NodeContextProvider } from "./context/NodeContext.jsx";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <NodeContextProvider>
      <App />
    </NodeContextProvider>
  </StrictMode>
);
