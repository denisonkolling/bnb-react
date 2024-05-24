import { Link } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';

export type Stay = {
	id: number;
	name: string;
	location: string;
	pricePerDay: number;
	description: string;
	coverImage: string;
	imagesUrl: string[];
	highlights: string[];
	maxGuests: number;
	countryCode: string;
	recommended: boolean;
	startDate: Date | String;
	endDate: Date | String;
	locationDescription: string | null;
	reservations: StayReservation[] | null;
};

interface StayReservation {
	id: string;
	guestName: string;
	checkInDate: Date;
	checkOutDate: Date;
}

interface StayItemProps {
	stay: Stay;
}

const StayItem = ({ stay }: StayItemProps) => {
	return (
		<Link to={`/stays/${stay.id}`}>
			<div className='flex flex-col'>
				<div className='relative h-[280px] w-[280px]'>
					<img
						src={stay.coverImage}
						className='rounded-lg shadow-md'
						style={{
							objectFit: 'cover',
						}}
						alt={stay.name}
					/>
				</div>

				<h3 className='text-primaryDarker font-medium text-sm mt-2'>{stay.name}</h3>
				<div className='flex items-center gap-1 my-1'>
					<ReactCountryFlag countryCode={stay.countryCode} svg />
					<p className='text-xs text-grayPrimary'>{stay.location}</p>
				</div>

				<p className='text-xs text-grayPrimary'>
					<span className='text-primary font-medium'>R${stay.pricePerDay.toString()}</span> por dia
				</p>
			</div>
		</Link>
	);
};

export default StayItem;
