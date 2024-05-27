import { MdOutlineCottage, MdOutlineHotel } from 'react-icons/md';
import { PiFarm } from 'react-icons/pi';
import { GoHome } from 'react-icons/go';
import { Link } from 'react-router-dom';

const QuickSearch = () => {
	return (
		<div className='container mx-auto p-5'>
			<div className='flex items-center'>
				<div className='w-full h-[1px] bg-grayLighter'></div>
				<h2 className='px-5 font-medium text-grayPrimary whitespace-nowrap'>Tente pesquisar por</h2>
				<div className='w-full h-[1px] bg-grayLighter'></div>
			</div>

			<div className='flex w-full justify-between mt-5 lg:mt-10 lg:justify-center gap-40'>
				<div className='flex flex-col items-center gap-1'>
					<Link
						to='/stays/search?text=hotel'
						className='flex flex-col items-center hover:text-primary transition-all'
					>
						<MdOutlineHotel size={'35px'} />
						<p className='text-sm lg:text-base text-grayPrimary'>Hotel</p>
					</Link>
				</div>

				<div className='flex flex-col items-center gap-1'>
					<Link
						to='/stays/search?text=fazenda'
						className='flex flex-col items-center hover:text-primary transition-all'
					>
						<PiFarm size={'35px'} />
						<p className='text-sm lg:text-base text-grayPrimary'>Fazenda</p>
					</Link>
				</div>

				<div className='flex flex-col items-center gap-1'>
					<Link
						to='/stays/search?text=Chalé'
						className='flex flex-col items-center hover:text-primary transition-all'
					>
						<MdOutlineCottage size={'35px'} />
						<p className='text-sm lg:text-base text-grayPrimary'>Chalé</p>
					</Link>
				</div>

				<div className='flex flex-col items-center gap-1'>
					<Link
						to='/stays/search?text=pousada'
						className='flex flex-col items-center hover:text-primary transition-all'
					>
						<GoHome size={'35px'} />
						<p className='text-sm lg:text-base text-grayPrimary'>Pousada</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default QuickSearch;
