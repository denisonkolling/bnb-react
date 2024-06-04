import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import StayHeader from '../../componets/StayHeader';
import StayReservation from '../../componets/StayReservation';
import StayDescription from '../../componets/StayDescription';
import StayHighlights from '../../componets/StayHighlights';
import StayLocation from '../../componets/StayLocation';
import { myStays } from '../../data/data_br';
import { Stay } from '../../componets/StayItem';

const StayDetails = () => {
	const [stay, setStay] = useState<Stay>();
	const params = useParams<{ id?: string }>();
	const navigate = useNavigate();

	useEffect(() => {
		if (params.id !== undefined) {
			const stayId = parseInt(params.id);
			const selectedStay = myStays.find((stay) => stay.id === stayId);
			if (selectedStay) {
				setStay(selectedStay);
				window.scrollTo(0, 0);
			} else {
				navigate('/not-found');
			}
		}
	}, [params.id, navigate]);

	if (!stay) return null;

	return (
		<div className='container mx-auto lg:px-40 lg:pt-10'>
			<StayHeader stay={stay} />
			<div className='flex flex-col lg:flex-row lg:mt-12 lg:gap-20'>
				<div className='lg:order-2'>
					<StayReservation
						stayId={stay.id}
						pricePerDay={stay.pricePerDay as any}
						stayStartDate={stay.startDate}
						stayEndDate={stay.endDate}
						maxGuests={stay.maxGuests}
					/>
				</div>

				<div className='lg:order-1'>
					<StayDescription description={stay.description} />
					<StayHighlights highlights={stay.highlights} />
				</div>
			</div>
			<StayLocation locationDescription={stay.locationDescription} location={stay.location} />
		</div>
	);
};

export default StayDetails;
