
// src/providers/ApiProvider.jsx
import { createContext, useContext } from "react";

const ApiContext = createContext();

// 🧠 Hämta bas-URL från miljövariabel
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

export function ApiProvider({ children }) {
  // En funktion som alla kan använda för att prata med API:t
  async function apiFetch(endpoint, options = {}) {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, options);

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      return await response.json();
    } catch (err) {
      console.error("❌ API-fel:", err);
      throw err;
    }
  }

  return (
    <ApiContext.Provider value={{ apiFetch }}>
      {children}
    </ApiContext.Provider>
  );
}

// En "hook" så att man lätt kan använda den i andra komponenter
export function useApi() {
  return useContext(ApiContext);
}

