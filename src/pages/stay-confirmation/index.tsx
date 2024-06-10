import { useEffect, useState } from 'react';
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import ReactCountryFlag from 'react-country-flag';
import Button from '../../componets/Button';
import { toast } from 'react-toastify';
import { Stay } from '../../componets/StayItem';
import { myStays } from '../../data/data_br';
import { formatPrice } from '../../utils/formatPrice';

const StayConfirmation = () => {
	const [stay, setStay] = useState<Stay | null>(null);
	const [searchParams] = useSearchParams();
	const [status] = useState('authenticated');
	const { stayId } = useParams<{ stayId: string }>();
	const navigate = useNavigate();

	useEffect(() => {
		if (stayId !== undefined) {
			const id = parseInt(stayId);
			const selectedStay = myStays.find((stay) => stay.id === id);
			if (selectedStay) {
				setStay(selectedStay);
				window.scrollTo(0, 0);
			} else {
				navigate('/not-found');
			}
		}

		if (status === 'unauthenticated') {
			navigate('/');
		}
	}, [status, searchParams, stayId, navigate]);

	if (!stay) return null;

	const handleBuyClick = async () => {
		const res = await fetch('/api/payment', {});

		if (!res.ok) {
			return toast.error('Ocorreu um erro ao realizar a reserva!', { position: 'bottom-center' });
		}

		toast.success('Reserva realizada com sucesso!', { position: 'bottom-center' });
	};

	const startDate = new Date(searchParams.get('startDate') as string);
	const endDate = new Date(searchParams.get('endDate') as string);
	const guests = searchParams.get('guests');
	const totalPrice = Number(searchParams.get('totalPrice'));

	return (
		<div className='container mx-auto p-5 lg:max-w-[600px]'>
			<h1 className='font-semibold text-xl text-primaryDarker'>Sua viagem</h1>

			{/* CARD */}
			<div className='flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg'>
				<div className='flex items-center gap-3 pb-5 border-b border-grayLighter border-solid'>
					<div className='relative h-[106px] w-[124px]'>
						<img
							src={stay.coverImage}
							style={{ objectFit: 'cover' }}
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

				<h3 className='font-semibold text-lg text-primaryDarker mt-3'>Informações sobre o preço</h3>

				<div className='flex justify-between mt-1'>
					<p className='text-primaryDarker'>Total</p>
					<p className='font-medium'>{formatPrice(totalPrice)}</p>
				</div>
			</div>

			<div className='flex flex-col mt-5 text-primaryDarker'>
				<h3 className='font-semibold'>Data</h3>
				<div className='flex items-center gap-1 mt-1'>
					<p>{format(startDate, "dd 'de' MMMM", { locale: ptBR })}</p>
					{' - '}
					<p>{format(endDate, "dd 'de' MMMM", { locale: ptBR })}</p>
				</div>

				<h3 className='font-semibold mt-5'>Hóspedes</h3>
				<p>{guests} hóspedes</p>

				<Button className='mt-5' onClick={handleBuyClick}>
					Finalizar Compra
				</Button>
			</div>
		</div>
	);
};

export default StayConfirmation;
