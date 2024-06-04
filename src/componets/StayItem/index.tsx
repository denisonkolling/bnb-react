import { Link } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';

export type Stay = {
	id: number;
	name: string;
	description: string;
	startDate: Date;
	endDate: Date;
	location: string;
	countryCode: string;
	coverImage: string;
	imagesUrl: string[];
	pricePerDay: number;
	highlights: string[];
	recommended: boolean;
	maxGuests: number;
	locationDescription: string;
	reservations: StayReservation[];
};

interface StayReservation {
	id: number;
	stayId: number;
	userId: number;
	startDate: Date;
	endDate: Date;
	totalPaid: number;
	guests: number;
	stay: number;
	user: string;
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
							height: '100%',
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
