import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successNotification = (message) => {
	toast.success(message, { position: 'bottom-center' });
};

export const errorNotification = (message) => {
	toast.error(message, { position: 'bottom-center' });
};
