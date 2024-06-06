import { FaTriangleExclamation } from 'react-icons/fa6';

const NotFound = () => {
	return (
		<div className='container mx-auto p-5 lg:max-w-[600px]'>
			<div className='flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg'>
				<div className='flex items-center justify-center gap-3 pb-5 border-b border-grayLighter border-solid'>
					<FaTriangleExclamation />
					<h1 className='font-semibold text-xl text-primaryDarker'>Página Não Encontrada</h1>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
