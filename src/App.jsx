<<<<<<< HEAD
//import { BrowserRouter } from 'react-router-dom';
//import AppProvider from './providers/AppProvider.jsx';
//import PageShell from './templates/PageShell.template.jsx';
//import Approutes from './routes/AppRoutes.jsx';
import { Button } from "@ck/ck-components";
import { GameBoard } from "@ck/ck-components";

=======
import React from "react";

function App() {
	return(
		<div>Frontend repository for Gomoku game</div>
	);
};
>>>>>>> afda427e918eb02d09fee888424c8d6c24ac6c7e

const App = () => {
	return (
		<div>
		<Button />
		<GameBoard />
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
