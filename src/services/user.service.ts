import { IExploreProfile, IProfile } from '@/types';
import apiRequest from '@/libs/axios';
import { API_ENDPOINTS } from '@/configs/endpoints';

export const getUserProfile = async (): Promise<IProfile> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.USER.GET_PROFILE,
    errorMessage: 'Fail to fetch profile'
  });
};

export const getUserById = async (userId: string): Promise<IProfile> => {
  return apiRequest({
    method: 'GET',
    url: `${API_ENDPOINTS.USER.GET_PROFILE_BY_ID}/${userId}`,
    errorMessage: 'Fail to fetch user profile by id'
  });
};

export const getExploreUsers = async (): Promise<IExploreProfile[]> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.USER.EXPLORE,
    errorMessage: 'Fail to fetch explore'
  });
};

export const followUserWithId = async (userId: string): Promise<void> => {
  return apiRequest({
    method: 'PUT',
    url: `${API_ENDPOINTS.USER.FOLLOW}/${userId}`,
    errorMessage: 'Fail to follow user'
  });
};

export const unfollowUserWithId = async (userId: string): Promise<void> => {
  return apiRequest({
    method: 'PUT',
    url: `${API_ENDPOINTS.USER.UNFOLLOW}/${userId}`,
    errorMessage: 'Fail to follow user'
  });
};
