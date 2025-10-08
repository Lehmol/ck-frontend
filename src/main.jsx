import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
<<<<<<< HEAD
//import ApiProvider from "./providers/ApiProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App />
=======
import { ApiProvider } from './providers/ApiProvider.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiProvider>
	<App />
    </ApiProvider>
>>>>>>> c07dc34137c979dd0a13aa8a03d94e83c4e2cebd
  </StrictMode>
);

