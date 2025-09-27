import axios from 'axios';
import { BASE_URL } from '@/configs';
import { UserProfile, User, ResponseExploreUser } from '@/types';
import { getAuthorizedTokenHeader } from '@/util';

const userApi = axios.create({ baseURL: `${BASE_URL}/user` });

export const getUserProfile = async (): Promise<UserProfile> => {
  try {
    const response = await userApi.get('/profile', { headers: getAuthorizedTokenHeader() });

    return response.data;
  } catch (error) {
    throw new Error(`🚨 Failed to fetch user profile. ${error}`);
  }
};

export const getUserById = async (userId: string): Promise<UserProfile> => {
  try {
    const response = await userApi.get(`/${userId}`, { headers: getAuthorizedTokenHeader() });

    return response.data;
  } catch (error) {
    throw new Error(`🚨 Failed to fetch user information for ID: ${userId} . ${error}`);
  }
};

export const getExploreUsers = async (): Promise<ResponseExploreUser[]> => {
  try {
    const response = await userApi.get('/explore', { headers: getAuthorizedTokenHeader() });
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw new Error(`🚨 Failed to fetch explore users. ${error}`);
  }
};

export const followUserWithId = async (userId: string): Promise<void> => {
  try {
    await userApi.post(`/${userId}/follow`, {}, { headers: getAuthorizedTokenHeader() });
  } catch (error) {
    throw new Error(`🚨 Failed to follow user ${error}`);
  }
};

export const unfollowUserWithId = async (userId: string): Promise<void> => {
  try {
    await userApi.post(`/${userId}/unfollow`, {}, { headers: getAuthorizedTokenHeader() });
  } catch (error) {
    throw new Error(`🚨 Failed to unfollow user ${error}`);
  }
};
