import { Routes, Route } from 'react-router-dom';
import Home from '../../src/pages/home';
import Stays from '../pages/stay-search';
import MyStays from '../pages/my-stays';
import StayDetails from '../pages/stay-details';
import StayConfirmation from '../pages/stay-confirmation';
import NotFound from '../pages/not-found';


const RoutesApp = () => {
	return (
		<Routes>
			<Route path='/not-found' element={<NotFound />} />
			<Route path='/' element={<Home />} />
			<Route path='/home' element={<Home />} />
			<Route path='/stays/search' element={<Stays />} />
			<Route path='/my-stays' element={<MyStays />} />
			<Route path={`/stays/:id`} element={<StayDetails />} />
			<Route path={`/stays/:stayId/confirmation`} element={<StayConfirmation />} />
		</Routes>
	);
};

export default RoutesApp;
