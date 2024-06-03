import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from '../src/routes';
import Header from './componets/Header';
import Footer from './componets/Footer';
import ToastProvider from '../src/services/toast';

function App() {
	return (
		<ToastProvider>
			<div className='flex flex-col h-screen'>
				<div className='h-[94px]'>
					<Header />
				</div>
				<div className='flex-1'>
					<Router>
						<RoutesApp />
					</Router>
				</div>
				<Footer />
			</div>
		</ToastProvider>
	);
}

export default App;
