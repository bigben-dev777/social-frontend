import { UserProfile, ResponseExploreUser } from '@/types';
import apiRequest from '@/libs/axios';
import { API_ENDPOINTS } from '@/configs/endpoints';


export const getUserProfile = async (): Promise<UserProfile> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.USER.GET_PROFILE,
    errorMessage: 'Fail to fetch profile'
  });
};

export const getUserById = async (userId: string): Promise<UserProfile> => {
  return apiRequest({
    method: 'GET',
    url: `${API_ENDPOINTS.USER.GET_PROFILE_BY_ID}/${userId}`,
    errorMessage: 'Fail to fetch user profile by id'
  });
};

export const getExploreUsers = async (): Promise<ResponseExploreUser[]> => {
  // try {
  //   const response = await userApi.get('/explore', { headers: getAuthorizedTokenHeader() });
  //   console.log(response.data);

  //   return response.data;
  // } catch (error) {
  //   throw new Error(`🚨 Failed to fetch explore users. ${error}`);
  // }
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.USER.EXPLORE,
    errorMessage: 'Fail to fetch explore'
  });
};

export const followUserWithId = async (userId: string): Promise<void> => {
  // try {
  //   await userApi.post(`/${userId}/follow`, {}, { headers: getAuthorizedTokenHeader() });
  // } catch (error) {
  //   throw new Error(`🚨 Failed to follow user ${error}`);
  // }
  return apiRequest({
    method: 'POST',
    url: `${API_ENDPOINTS.USER.FOLLOW}/${userId}`,
    errorMessage: 'Fail to follow user'
  });
};

export const unfollowUserWithId = async (userId: string): Promise<void> => {
  // try {
  //   await userApi.post(`/${userId}/unfollow`, {}, { headers: getAuthorizedTokenHeader() });
  // } catch (error) {
  //   throw new Error(`🚨 Failed to unfollow user ${error}`);
  // }
  return apiRequest({
    method: 'POST',
    url: `${API_ENDPOINTS.USER.UNFOLLOW}/${userId}`,
    errorMessage: 'Fail to follow user'
  });
};
