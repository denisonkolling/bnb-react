import Button from './Button';
import DatePicker from './DatePicker';
import Input from './Input';
import { differenceInDays } from 'date-fns';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

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
		setError,
	} = useForm<StayReservationForm>();

	const navigate = useNavigate();

	const onSubmit = async (data: StayReservationForm) => {
		navigate(
			`/stays/${stayId}/confirmation?startDate=${data.startDate?.toISOString()}&endDate=${data.endDate?.toISOString()}&guests=${
				data.guests
			}`
		);
	};

	const startDate = watch('startDate');
	const endDate = watch('endDate');

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
							placeholderText='Data de Início'
							className='w-full'
							minDate={stayStartDate}
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
							placeholderText='Data Final'
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

			<div className='flex justify-between mt-3'>
				<p className='font-medium text-sm text-primaryDarker'>Total: </p>
				<p className='font-medium text-sm text-primaryDarker'>
					{startDate && endDate
						? `R$${differenceInDays(endDate, startDate) * pricePerDay}` ?? 1
						: 'R$0'}
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
