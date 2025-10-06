//import { BrowserRouter } from 'react-router-dom';
//import AppProvider from './providers/AppProvider.jsx';
//import PageShell from './templates/PageShell.template.jsx';
//import Approutes from './routes/AppRoutes.jsx';
import { Button } from "@ck/ck-components";
import { GameBoard } from "@ck/ck-components";
import { Background } from "@ck/ck-components";
import { Players } from "@ck/ck-components";

const App = () => {
  return (
    <Background>
      <GameBoard />
      <Button />
    </Background>
  );
};
export default App;
