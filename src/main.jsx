import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//Currently this will disable right click stuff. Might be removed later...
document.addEventListener("contextmenu", (event) => event.preventDefault());

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
);
