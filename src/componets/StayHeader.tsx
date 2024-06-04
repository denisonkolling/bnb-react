import ReactCountryFlag from 'react-country-flag';
import { Stay } from '../componets/StayItem';

interface StayHeaderProps {
	stay: Stay;
}

const StayHeader = ({ stay }: StayHeaderProps) => {
	return (
		<div className='flex flex-col'>
			<div className='relative h-[300px] w-full lg:hidden'>
				<img
					src={stay.coverImage}
					style={{
						objectFit: 'cover',
						height: '100%',
					}}
					alt={stay.name}
				/>
			</div>

			<div className='hidden lg:grid grid-cols-[2fr,1fr,1fr] gap-2 grid-rows-2 lg:order-2'>
				<div className='relative row-span-2'>
					<img
						src={stay.coverImage}
						style={{
							objectFit: 'cover',
							height: '100%',
						}}
						alt={stay.name}
						className='rounded-tl-lg rounded-bl-lg shadow-md'
					/>
				</div>

				<div className='relative h-[200px] w-full'>
					<img
						src={stay.imagesUrl[0]}
						style={{
							objectFit: 'cover',
							height: '100%',
						}}
						alt={stay.name}
						className='shadow-md'
					/>
				</div>

				<div className='relative h-[200px] w-full'>
					<img
						src={stay.imagesUrl[1]}
						style={{
							objectFit: 'cover',
							height: '100%',
						}}
						alt={stay.name}
						className='shadow-md  rounded-tr-lg'
					/>
				</div>

				<div className='relative h-[200px] w-full'>
					<img
						src={stay.imagesUrl[2]}
						style={{
							objectFit: 'cover',
							height: '100%',
						}}
						alt={stay.name}
						className='shadow-md'
					/>
				</div>

				<div className='relative h-[200px] w-full'>
					<img
						src={stay.coverImage}
						style={{
							objectFit: 'cover',
							height: '100%',
						}}
						alt={stay.name}
						className='shadow-md  rounded-br-lg'
					/>
				</div>
			</div>

			<div className='flex flex-col p-5 lg:order-1 lg:p-0 lg:mb-10'>
				<h1 className='font-semibold text-xl lg:text-3xl text-primaryDarker'>{stay.name}</h1>

				<div className='flex items-center gap-1 my-1'>
					<ReactCountryFlag countryCode={stay.countryCode} svg />
					<p className='text-xs lg:text-base text-grayPrimary underline'>{stay.location}</p>
				</div>

				<p className='text-xs text-grayPrimary lg:hidden'>
					<span className='text-primary font-medium'>R${stay.pricePerDay.toString()}</span> por dia
				</p>
			</div>
		</div>
	);
};

export default StayHeader;
