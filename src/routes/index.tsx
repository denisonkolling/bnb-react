import { Routes, Route } from 'react-router-dom';
import Home from '../../src/pages/home';
import Stays from '../pages/stay-search';
import MyStays from '../pages/my-stays';

const RoutesApp = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/home' element={<Home />} />
			<Route path='/stays/search' element={<Stays />} />
			<Route path='/my-stays' element={<MyStays />} />
		</Routes>
	);
};

export default RoutesApp;
