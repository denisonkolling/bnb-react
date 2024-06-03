import ReactCountryFlag from 'react-country-flag';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { toast } from 'react-toastify';
import Button from './Button';
import Stay from './StayItem';

export type Stay = {
	id: number | string;
	name: string;
	description: string;
	startDate: Date | String;
	endDate: Date | String;
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
	id: string;
	stayId: string;
	userId: string;
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

const ReservationCard = ({ stay }: StayItemProps) => {
	const reservations = stay.reservations[0];

	const handleDeleteClick = async () => {
		const res = await fetch(`/api/stays/reservations/${reservations.id}`, {
			method: 'DELETE',
		});

		if (!res.ok) {
			return toast.error('Ocorreu um erro ao cancelar a reserva!');
		}

		toast.success('Reserva cancelada com sucesso!', { position: 'bottom-center' });
	};

	return (
		<div>
			{/* CARD */}
			<div className='flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg'>
				<div className='flex items-center gap-3 pb-5 border-b border-grayLighter border-solid'>
					<div className='relative h-[106px] w-[124px]'>
						<img
							src={stay.coverImage}
							style={{ objectFit: 'cover', height: '100%' }}
							className='rounded-lg'
							alt={stay.name}
						/>
					</div>

					<div className='flex flex-col'>
						<h2 className='text-xl text-primaryDarker font-semibold'>{stay.name}</h2>
						<div className='flex items-center gap-1'>
							<ReactCountryFlag countryCode={stay.countryCode} svg />
							<p className='text-xs text-grayPrimary underline'>{stay.location}</p>
						</div>
					</div>
				</div>

				<div className='flex flex-col mt-5 text-primaryDarker'>
					<h3 className='text-sm'>Data</h3>
					<div className='flex items-center gap-1'>
						<p className='text-sm'>
							{format(new Date(reservations.startDate), "dd 'de' MMMM", { locale: ptBR })}
						</p>
						{' - '}
						<p className='text-sm'>
							{format(new Date(reservations.endDate), "dd 'de' MMMM", { locale: ptBR })}
						</p>
					</div>

					<h3 className='mt-5 text-sm'>Hóspedes</h3>
					<p className='text-sm pb-5'>{reservations.guests} hóspedes</p>

					<h3 className='font-semibold text-primaryDarker mt-3 pt-5 border-t border-solid border-grayLighter'>
						Informações sobre o preço
					</h3>

					<div className='flex justify-between mt-1'>
						<p className='text-primaryDarker text-sm mt-2'>Total:</p>
						<p className='font-medium text-sm'>R${Number(reservations.totalPaid)}</p>
					</div>

					<Button variant='danger' className='mt-5' onClick={handleDeleteClick}>
						Cancelar
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ReservationCard;
