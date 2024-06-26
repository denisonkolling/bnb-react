import { Stay } from '../StayItem';
import StayItem from '../StayItem';
import { myStays } from '../../data/data_br';

const RecommendedStays = () => {
	const data = myStays;

	return (
		<div className='container mx-auto p-5'>
			<div className='flex items-center'>
				<div className='w-full h-[1px] bg-grayLighter'></div>
				<h2 className='px-5 font-medium text-grayPrimary whitespace-nowrap'>
					Destinos Recomendados
				</h2>
				<div className='w-full h-[1px] bg-grayLighter'></div>
			</div>

			<div className='flex flex-col items-center mt-5 lg:mt-12 gap-5 lg:flex-row gap lg:flex-wrap lg:justify-center lg:gap-10'>
				{data.map((stay: Stay) => (
					<StayItem key={stay.id} stay={stay} />
				))}
			</div>
		</div>
	);
};

export default RecommendedStays;
