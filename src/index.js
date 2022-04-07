import React from "react";
import { createRoot } from "react-dom/client"; // llamada al React DOM para renderizar componentes
import "./index.css";
import CounterApp from "./CounterApp";

// react 18
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    < CounterApp value={5} />
  </React.StrictMode>
);
