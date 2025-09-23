import { BrowserRouter } from 'react-router-dom';
import AppProvider from './providers/AppProvider.jsx';
import PageShell from './templates/PageShell.template.jsx';
import Approutes from './routes/AppRoutes.jsx';

const App = () => (
	<AppProvider>
		<BrowserRouter>
			<PageShell>
				<AppRoutes />
			</PageShell>
		</BrowserRouter>
	</AppProvider>
);

export default App;
