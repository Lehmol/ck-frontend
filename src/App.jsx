//import { BrowserRouter } from 'react-router-dom';
//import AppProvider from './providers/AppProvider.jsx';
//import PageShell from './templates/PageShell.template.jsx';
//import Approutes from './routes/AppRoutes.jsx';
import { GameBoard } from "@ck/ck-components";
import { Background } from "@ck/ck-components";
import { Players } from "@ck/ck-components";
import { PopUp } from "@ck/ck-components";

const App = () => {
  return (
    <Background>
      <GameBoard />
      <Players />
      <PopUp />
    </Background>
  );
};
export default App;
