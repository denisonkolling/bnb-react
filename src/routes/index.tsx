import { Routes, Route } from 'react-router-dom';
import Home from '../../src/pages/home';
import Stays from '../pages/stay-search';

const RoutesApp = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/home' element={<Home />} />
			<Route path='/stays/search' element={<Stays />} />
		</Routes>
	);
};

export default RoutesApp;
