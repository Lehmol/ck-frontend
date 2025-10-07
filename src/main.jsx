import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ApiProvider } from './providers/ApiProvider.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiProvider>
	<App />
    </ApiProvider>
  </StrictMode>
);
