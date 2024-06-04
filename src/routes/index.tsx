import { Routes, Route } from 'react-router-dom';
import Home from '../../src/pages/home';
import Stays from '../pages/stay-search';
import MyStays from '../pages/my-stays';
import StayDetails from '../pages/stay-details';

const RoutesApp = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/home' element={<Home />} />
			<Route path='/stays/search' element={<Stays />} />
			<Route path='/my-stays' element={<MyStays />} />
			<Route path={`/stays/:id`} element={<StayDetails />} />
		</Routes>
	);
};

export default RoutesApp;
