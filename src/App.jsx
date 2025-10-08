import "./App.css";
import { GameBoard } from "@ck/ck-components";
import { Background } from "@ck/ck-components";
import { PopUp } from "@ck/ck-components";
import { useState } from "react";
import { Header } from "@ck/ck-components";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerColors, setPlayerColors] = useState({
    player1: "",
    player2: "",
  });

  const handleGameStart = (player1Color, player2Color) => {
    setPlayerColors({ player1: player1Color, player2: player2Color });
    setGameStarted(true);
  };

  return (
    <Background>
      <Header />
      <div className="app-container">
        <div className="app-content">
          <GameBoard playerColors={playerColors} />
          <PopUp onGameStart={handleGameStart} />
        </div>
      </div>
    </Background>
  );
};
export default App;
