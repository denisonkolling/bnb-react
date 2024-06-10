import { useEffect } from 'react';
import Button from './Button';
import DatePicker from './DatePicker';
import Input from './Input';
import { differenceInDays } from 'date-fns';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';

interface StayReservationProps {
	stayId: number;
	stayStartDate: Date;
	stayEndDate: Date;
	maxGuests: number;
	pricePerDay: number;
}

interface StayReservationForm {
	guests: number;
	startDate: Date;
	endDate: Date;
	totalPrice: number;
}

const StayReservation = ({
	stayId,
	maxGuests,
	stayStartDate,
	stayEndDate,
	pricePerDay,
}: StayReservationProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		watch,
		setValue,
	} = useForm<StayReservationForm>();

	const navigate = useNavigate();

	const startDate = watch('startDate');
	const endDate = watch('endDate');
	const today = new Date();

	useEffect(() => {
		if (startDate && endDate) {
			const days = differenceInDays(endDate, startDate);
			const totalPrice = days * pricePerDay;
			setValue('totalPrice', totalPrice);
		} else {
			setValue('totalPrice', 0);
		}
	}, [startDate, endDate, pricePerDay, setValue]);

	const onSubmit = async (data: StayReservationForm) => {
		navigate(
			`/stays/${stayId}/confirmation?startDate=${data.startDate?.toISOString()}&endDate=${data.endDate?.toISOString()}&guests=${
				data.guests
			}&totalPrice=${data.totalPrice}`
		);
	};

	const totalPrice = startDate && endDate ? differenceInDays(endDate, startDate) * pricePerDay : 0;

	return (
		<div className='flex flex-col px-5 lg:min-w-[380px] lg:p-5 lg:border-grayLighter lg:border lg:rounded-lg lg:shadow-md'>
			<p className='text-xl hidden text-primaryDarker mb-4 lg:block'>
				<span className='font-semibold'>R${pricePerDay}</span> por dia
			</p>

			<div className='flex gap-4'>
				<Controller
					name='startDate'
					rules={{
						required: {
							value: true,
							message: 'Data inicial é obrigatória.',
						},
					}}
					control={control}
					render={({ field }) => (
						<DatePicker
							error={!!errors?.startDate}
							errorMessage={errors?.startDate?.message}
							onChange={field.onChange}
							selected={field.value}
							placeholderText='Data de check in'
							className='w-full'
							minDate={today}
						/>
					)}
				/>

				<Controller
					name='endDate'
					rules={{
						required: {
							value: true,
							message: 'Data final é obrigatória.',
						},
					}}
					control={control}
					render={({ field }) => (
						<DatePicker
							error={!!errors?.endDate}
							errorMessage={errors?.endDate?.message}
							onChange={field.onChange}
							selected={field.value}
							placeholderText='Data de check out'
							className='w-full'
							maxDate={stayEndDate}
							minDate={startDate ?? stayStartDate}
						/>
					)}
				/>
			</div>

			<Input
				{...register('guests', {
					required: {
						value: true,
						message: 'Número de hóspedes é obrigatório.',
					},
					max: {
						value: maxGuests,
						message: `Número de hóspedes não pode ser maior que ${maxGuests}.`,
					},
				})}
				placeholder={`Número de hóspedes (max: ${maxGuests})`}
				className='mt-4'
				error={!!errors?.guests}
				errorMessage={errors?.guests?.message}
				type='number'
			/>

			<div className='flex justify-end mt-3'>
				<p className='font-medium text-sm text-primaryDarker px-2'>Total</p>
				<p className='font-medium text-sm text-primaryDarker px-2'>
					{startDate && endDate ? formatPrice(totalPrice) ?? 1 : 'R$ 0,00'}
				</p>
			</div>

			<div className='pb-10 border-b border-b-grayLighter w-full lg:border-none lg:pb-0'>
				<Button onClick={() => handleSubmit(onSubmit)()} className='mt-3 w-full'>
					Reservar agora
				</Button>
			</div>
		</div>
	);
};

export default StayReservation;
