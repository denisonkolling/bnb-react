import { myStays } from '../../data/data_br';
import ReservationCard from '../../componets/ReservationCard';

export default function MyStays() {
	return (
		<div className='flex items-center flex-col'>
			<h2 className='mt-5 font-medium text-grayPrimary whitespace-nowrap'>Minhas Reservas</h2>
			<div>
				<div className='flex flex-col items-center gap-5 m-5 lg:mt-5 lg:flex-row gap lg:flex-wrap lg:justify-center lg:gap-10'>
					{myStays.map((stay) => (
						<div key={stay.id}>
							<ReservationCard stay={stay} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
