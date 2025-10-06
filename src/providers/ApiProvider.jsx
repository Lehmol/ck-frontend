import { useEffect } from 'react';

export const getGames = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/gomoku/games", {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.log("Fel vid hämtning av Games:", res.status);
      return null;
    }

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
    const res = await fetch("http://localhost:3001/api/gomoku/games/add", {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.log("Fel vid hämtning av Add:", res.status);
      return null;
    }

    const data = await res.json();
    console.log("Hämtade Add:", data);
    return data;

  } catch (error) {
    console.log("Kunde inte hämta Add:", error);
    return null;
  }
};



export const getId = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/gomoku/games/{id}", {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.log("Fel vid hämtning av ID:", res.status);
      return null;
    }

    const data = await res.json();
    console.log("Hämtade ID:", data);
    return data;

  } catch (error) {
    console.log("Kunde inte hämta ID:", error);
    return null;
  }
};


export const getPlayers = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/gomoku/players", {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.log("Fel vid hämtning av Players:", res.status);
      return null;
    }

    const data = await res.json();
    console.log("Hämtade Players:", data);
    return data;

  } catch (error) {
    console.log("Kunde inte hämta Players:", error);
    return null;
  }
};


export const getJoin = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/gomoku/player/join/{game}/{player}", {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.log("Fel vid hämtning av Join:", res.status);
      return null;
    }

    const data = await res.json();
    console.log("Hämtade Join:", data);
    return data;

  } catch (error) {
    console.log("Kunde inte hämta Join:", error);
    return null;
  }
};



export const getCol = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/gomoku/player/play/{game}/{player}/{col}/{row}", {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.log("Fel vid hämtning av Col:", res.status);
      return null;
    }

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
    const res = await fetch("http://localhost:3001/api/gomoku/player/create", {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.log("Fel vid hämtning av Create:", res.status);
      return null;
    }

    const data = await res.json();
    console.log("Hämtade Create:", data);
    return data;

  } catch (error) {
    console.log("Kunde inte hämta Create:", error);
    return null;
  }
};



export const getPlayerId = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/gomoku/player/{id}", {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.log("Fel vid hämtning av playerId:", res.status);
      return null;
    }

    const data = await res.json();
    console.log("Hämtade playerId:", data);
    return data;

  } catch (error) {
    console.log("Kunde inte hämta playerId:", error);
    return null;
  }
};

