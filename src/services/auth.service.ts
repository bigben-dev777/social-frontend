import { UserProfile, User, LoginUserInfo } from '@/types';
import apiRequest from '@/libs/axios';
import { API_ENDPOINTS } from '@/configs/endpoints';

export const signUp = async (userData: Omit<User, '_id'>): Promise<UserProfile> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.REGISTER,
    data: userData,
    errorMessage: 'Fail to sign up'
  });
};

export const logIn = async (
  userData: LoginUserInfo
): Promise<{ user: Pick<User, 'username' | 'email' | '_id'>; token: string }> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.AUTH.LOGIN,
    data: userData,
    errorMessage: 'Fail to sign in'
  });
};
