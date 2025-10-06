
// ApiProvider.jsx
const BASE_URL = "http://localhost:3001";

export const getGames = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/gomoku/games`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    console.log("Hämtade Games:", data);
    return data;
  } catch (error) {
    console.log("Kunde inte hämta Games:", error);
    return null;
  }
};

export const getAdd = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/gomoku/games/add`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    console.log("Hämtade Add:", data);
    return data;
  } catch (error) {
    console.log("Kunde inte hämta Add:", error);
    return null;
  }
};

// 🧩 Här tar vi emot id som argument
export const getId = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/api/gomoku/games/${id}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    console.log("Hämtade Game by ID:", data);
    return data;
  } catch (error) {
    console.log("Kunde inte hämta Game by ID:", error);
    return null;
  }
};

export const getPlayers = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/gomoku/players`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    console.log("Hämtade Players:", data);
    return data;
  } catch (error) {
    console.log("Kunde inte hämta Players:", error);
    return null;
  }
};

// join game
export const getJoin = async (game, player) => {
  try {
    const res = await fetch(`${BASE_URL}/api/gomoku/player/join/${game}/${player}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    console.log("Hämtade Join:", data);
    return data;
  } catch (error) {
    console.log("Kunde inte hämta Join:", error);
    return null;
  }
};

// spela drag
export const getCol = async (game, player, col, row) => {
  try {
    const res = await fetch(
      `${BASE_URL}/api/gomoku/player/play/${game}/${player}/${col}/${row}`,
      {
        method: "GET",
        headers: { Accept: "application/json" },
      }
    );
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    console.log("Hämtade Col:", data);
    return data;
  } catch (error) {
    console.log("Kunde inte hämta Col:", error);
    return null;
  }
};

export const getCreate = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/gomoku/player/create`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    console.log("Hämtade Create:", data);
    return data;
  } catch (error) {
    console.log("Kunde inte hämta Create:", error);
    return null;
  }
};

export const getPlayerId = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/api/gomoku/player/${id}`, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    console.log("Hämtade playerId:", data);
    return data;
  } catch (error) {
    console.log("Kunde inte hämta playerId:", error);
    return null;
  }
};

