import { IAuthUser, IProfile, IUser, IUserInput } from '@/types';
import apiRequest from '@/libs/axios';
import { API_ENDPOINTS } from '@/configs/endpoints';

export const signUp = async (userData: Omit<IUser, '_id'>): Promise<IProfile> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.REGISTER,
    data: userData,
    errorMessage: 'Fail to sign up'
  });
};

export const logIn = async (userData: IUserInput): Promise<{ user: IAuthUser; token: string }> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.LOGIN,
    data: userData,
    errorMessage: 'Fail to sign in'
  });
};
