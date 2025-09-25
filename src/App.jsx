//import { BrowserRouter } from 'react-router-dom';
//import AppProvider from './providers/AppProvider.jsx';
//import PageShell from './templates/PageShell.template.jsx';
//import Approutes from './routes/AppRoutes.jsx';
import { Button } from "@ck/ck-components";
import { GameBoard } from "@ck/ck-components";
import { Piece } from '@ck/ck-components';

const App = () => {
	return (
		<div>
		<Button />
		<GameBoard />
		<Piece />
		</div>
	 //<AppProvider>
	//	<BrowserRouter>
	//		<PageShell>
	//			<AppRoutes />
	//		</PageShell>
	//	</BrowserRouter>
	//</AppProvider>
	);
}; 
export default App;
