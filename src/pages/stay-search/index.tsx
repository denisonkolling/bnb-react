import StayItem from '../../componets/StayItem';
import { Stay } from '../../componets/StayItem';
import { useSearchParams } from 'react-router-dom';
import React, { useEffect } from 'react';

const Stays = () => {
	const [stays, setStays] = React.useState<Stay[]>([]);
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const fetchStays = async () => {
			const text = searchParams.get('text') || '';
			const startDate = searchParams.get('startDate') || '';
			const budget = searchParams.get('budget') || '';

			const response = await fetch(
				`/api/stays/search?text=${text}&startDate=${startDate}&budget=${budget}`
			);

			const data = await response.json();

			setStays(data);
		};

		fetchStays();
	}, [searchParams]);

	return (
		<div className='container mx-auto flex flex-col items-center lg:items-start p-5 lg:pt-10'>
			<h1 className='text-primaryDarker font-semibold text-xl lg:w-full lg:text-left lg:text-[2.5rem]'>
				Viagens Encontradas
			</h1>
			<h2 className='text-grayPrimary font-medium mb-5 lg:mt-6 lg:w-full lg:text-left'>
				{stays.length > 0
					? 'Listamos as melhores viagens pra você!'
					: 'Não encontramos nada nos seus parâmetros! =('}
			</h2>

			<div className='flex flex-col gap-4 lg:grid lg:grid-cols-4 lg:gap-10 lg:mt-6 lg:pb-16'>
				{stays?.map((stay) => (
					<StayItem key={stay.id} stay={stay} />
				))}
			</div>
		</div>
	);
};

export default Stays;
