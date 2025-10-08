
// src/providers/ApiProvider.jsx
import { createContext, useContext, useMemo } from "react";

const BASE_URL = import.meta.env?.VITE_API_URL ?? "http://localhost:3001";

const fetchJson = async (path) => {
  const url = `${BASE_URL}${path}`;
  try {
    const res = await fetch(url, { method: "GET", headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    console.log("OK", url, data);
    return data;
  } catch (err) {
    console.log("ERROR", url, err);
    return null;
  }
};

// Endpoints (alla GET enligt din backend)
export const getGames    = () => fetchJson("/api/gomoku/games");
export const getAdd      = () => fetchJson("/api/gomoku/games/add");
export const getId       = (id) => fetchJson(`/api/gomoku/games/${id}`);
export const getPlayers  = () => fetchJson("/api/gomoku/players");
export const getJoin     = (game, player) => fetchJson(`/api/gomoku/player/join/${game}/${player}`);
export const getCol      = (game, player, col, row) =>
  fetchJson(`/api/gomoku/player/play/${game}/${player}/${col}/${row}`);
export const getCreate   = () => fetchJson("/api/gomoku/player/create");
export const getPlayerId = (id) => fetchJson(`/api/gomoku/player/${id}`);

const APIContext = createContext(null);
export const useAPI = () => useContext(APIContext);

export default function ApiProvider({ children }) {
  const api = useMemo(() => ({
    getGames, getAdd, getId, getPlayers, getJoin, getCol, getCreate, getPlayerId
  }), []);
  return <APIContext.Provider value={api}>{children}</APIContext.Provider>;
}

