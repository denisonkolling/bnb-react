import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import imgLogo from '../../public/logo.png';

interface User {
	name: string;
	image: string;
}

const Header = () => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);

	const [status, setStatus] = useState('unauthenticated');
	const [data, setData] = useState<User>();

	const signIn = () => {
		setStatus('authenticated');
		setData({
			name: 'John Doe',
			image: 'https://picsum.photos/id/237/200/300',
		});
	};

	const signOut = () => {
		setStatus('unauthenticated');
	};

	const handleLoginClick = () => signIn();

	const handleLogoutClick = () => {
		setMenuIsOpen(false);
		signOut();
	};

	const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

	return (
		<div className='container mx-auto p-5 py-0 h-[93px] flex justify-between items-center lg:border-b lg:border-grayLighter'>
			<a href='/'>
				<div className='relative h-[32px] w-[182px]'>
					<img src={imgLogo} alt='BnB Stays' />
				</div>
			</a>

			{status === 'unauthenticated' && (
				<button className='text-primary text-sm font-semibold' onClick={handleLoginClick}>
					Login
				</button>
			)}

			{status === 'authenticated' && data && (
				<div className='flex items-center gap-3 border-grayLighter border border-solid rounded-full p-2 px-3 relative'>
					<AiOutlineMenu size={16} onClick={handleMenuClick} className='cursor-pointer' />

					<img
						height={35}
						width={35}
						src={data.image!}
						alt={data.name!}
						className='rounded-full shadow-md'
					/>

					{menuIsOpen && (
						<div className='z-50 absolute top-14 left-0 w-full h-[100px] bg-white rounded-lg shadow-md flex flex-col justify-center items-center'>
							<a href='/my-stays' onClick={() => setMenuIsOpen(false)}>
								<button className='text-primary pb-2 border-b border-grayLighter border-solid text-sm font-semibold'>
									Minhas Viagens
								</button>
							</a>

							<button
								className='text-primary pt-2 text-sm font-semibold'
								onClick={handleLogoutClick}
							>
								Logout
							</button>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Header;
