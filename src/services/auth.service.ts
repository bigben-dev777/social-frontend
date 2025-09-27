import axios from 'axios';
import { BASE_URL } from '@/configs';
import { UserProfile, User, LoginUserInfo } from '@/types';
import { setTokenAtLocal } from '@/util';

const authApi = axios.create({ baseURL: `${BASE_URL}/auth` });

export const signUp = async (userData: Omit<User, '_id'>): Promise<UserProfile> => {
  try {
    const response = await authApi.post('/register', userData);
    console.log(`✔ Success to Sign Up ${userData.email}`);

    return response.data;
  } catch (error) {
    throw new Error(`🚨 Failed to Sign Up. The reason is ${error}`);
  }
};

export const logIn = async (userData: LoginUserInfo): Promise<{user: Pick<User, 'username' | 'email' | '_id'> , token: string}> => {
  try {
    const response = await authApi.post('/login', userData);
    console.dir(response);
    setTokenAtLocal(response.data.token);

    return {
      user: response.data.user,
      token: response.data.token
    };
  } catch (error) {
    throw new Error(`🚨 Failed to Log in. Reason: ${error}`);
  }
};
