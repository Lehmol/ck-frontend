// src/providers/ApiProvider.jsx
import { createContext, useContext } from "react";

const ApiContext = createContext(null);

// 🏠 Basadress hämtas från .env (VITE_BASE_API_URL)
const RAW_BASE = import.meta.env.VITE_BASE_API_URL || "";
// Säkerställ exakt en slash mellan bas och path
const BASE = RAW_BASE.endsWith("/") ? RAW_BASE.slice(0, -1) : RAW_BASE;

function buildUrl(path) {
  // path ska börja med "/"
  const safe = path.startsWith("/") ? path : `/${path}`;
  return `${BASE}${safe}`;
}

export function ApiProvider({ children }) {
  // 🔹 Allmän GET-hjälpare
  async function getJson(path) {
    const url = buildUrl(path);
    const res = await fetch(url, { method: "GET" });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`GET ${url} failed: ${res.status} ${text}`);
    }
    // Vissa legacy-endpoints kan svara med tom body -> försök JSON, annars returnera text
    const ct = res.headers.get("content-type") || "";
    if (ct.includes("application/json")) return res.json();
    const txt = await res.text();
    try {
      return JSON.parse(txt);
    } catch {
      return txt; // om API:t inte skickar JSON
    }
  }

  // 🧩 --- GOMOKU ENDPOINTS (alla GET) ---

  // Games
  async function listGames() {
    return getJson("/api/gomoku/games");
  }

  async function addGame() {
    // legacy GET som skapar en ny match
    return getJson("/api/gomoku/games/add");
  }

  async function getGameById(id) {
    if (!id) throw new Error("getGameById: id saknas");
    return getJson(`/api/gomoku/games/${encodeURIComponent(id)}`);
  }

  // Players
  async function listPlayers() {
    return getJson("/api/gomoku/players");
  }

  async function createPlayer() {
    // legacy GET som skapar spelare (ingen payload)
    return getJson("/api/gomoku/player/create");
  }

  async function getPlayerById(id) {
    if (!id) throw new Error("getPlayerById: id saknas");
    return getJson(`/api/gomoku/player/${encodeURIComponent(id)}`);
  }

  async function joinGame(gameId, playerId) {
    if (!gameId || !playerId)
      throw new Error("joinGame: gameId eller playerId saknas");
    return getJson(
      `/api/gomoku/player/join/${encodeURIComponent(
        gameId
      )}/${encodeURIComponent(playerId)}`
    );
  }

  async function playMove(gameId, playerId, col, row) {
    // col/row förväntas vara siffror (eller strängsiffror)
    if (
      [gameId, playerId, col, row].some(
        (v) => v === undefined || v === null || v === ""
      )
    )
      throw new Error("playMove: gameId, playerId, col, row krävs");
    return getJson(
      `/api/gomoku/player/play/${encodeURIComponent(
        gameId
      )}/${encodeURIComponent(playerId)}/${encodeURIComponent(
        col
      )}/${encodeURIComponent(row)}`
    );
  }

  const api = {
    // bas-hjälpare om du behöver egna paths
    getJson,

    // games
    listGames,
    addGame,
    getGameById,

    // players
    listPlayers,
    createPlayer,
    getPlayerById,
    joinGame,
    playMove,
  };

  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
}

export function useApi() {
  const ctx = useContext(ApiContext);
  if (!ctx) throw new Error("useApi måste användas inom <ApiProvider>");
  return ctx;
}
