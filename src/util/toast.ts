import { toast } from 'react-toastify';

export const successToast = (msg: string): void => {
  toast.success(msg);
};

export const errorToast = (msg: string): void => {
  toast.error(msg);
};

export const warningToast = (msg: string): void => {
  toast.warning(msg);
};
