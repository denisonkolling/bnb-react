import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from '../src/routes';
import Header from './componets/Header';
import Footer from './componets/Footer';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
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
	);
}

export default App;
