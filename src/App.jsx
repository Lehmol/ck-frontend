import "./App.css";
import { GameBoard } from "@ck/ck-components";
import { Background } from "@ck/ck-components";
import { PopUp } from "@ck/ck-components";
import { useState } from "react";

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
<<<<<<< HEAD
      <GameBoard />
      <PopUp />
=======
      <div className="app-container">
        <div className="app-content">
          <GameBoard playerColors={playerColors} />
          <PopUp onGameStart={handleGameStart} />
        </div>
      </div>
>>>>>>> c07dc34137c979dd0a13aa8a03d94e83c4e2cebd
    </Background>
  );
};
export default App;
