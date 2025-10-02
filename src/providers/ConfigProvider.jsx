import React, { createContext, useContext, useState } from "react";

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [boardSize, setBoardSize] = useState(17); //Här ska vi kunna välja boardsize
  const [currentPlayer, setCurrentPlayer] = useState("black");
  
  const value = {
	  boardSize,
	  setBoardSize,
	  currentPlayer,
	  setCurrentPlayer,
  };

	return (
		<ConfigContext.Provider value={value}>
		{children}
		</ConfigContext.Provider>
	);
};

//En hook som kan användas i andra komponenter och tar emot värden
export const useConfigProvider = () => useContext(ConfigContext);
