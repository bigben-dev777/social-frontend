import { Post } from '@/types';
import apiRequest from '@/libs/axios';
import { API_ENDPOINTS } from '@/configs/endpoints';


export const getUserPosts = async (): Promise<Post[]> => {
  // try {
  //   const response = await postApi.get('/', { headers: getAuthorizedTokenHeader() });

  //   return response.data;
  // } catch (error) {
  //   throw new Error(`🚨 Failed to fetch all of my posts ${error}`);
  // }
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.POST.GET_USER_POSTS,
    errorMessage: 'Fail to fetch user posts'
  });
};

export const getFeed = async (): Promise<Post[]> => {
  // try {
  //   const response = await postApi.get('/feed', { headers: getAuthorizedTokenHeader() });

  //   return response.data;
  // } catch (error) {
  //   throw new Error(`🚨 Failed to fetch feed. ${error}`);
  // }
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.POST.GET_FEED,
    errorMessage: 'Fail to fetch user feed'
  });
};

export const addPost = async (content: string): Promise<void> => {
  return apiRequest({
    method: 'POST',
    url: API_ENDPOINTS.POST.GET_USER_POSTS,
    data: { content },
    errorMessage: 'Fail to add post'
  });
};

export const likePost = async (postId: string): Promise<void> => {
  // try {
  //   await postApi.post(`/${postId}/like`, {}, { headers: getAuthorizedTokenHeader() });
  // } catch (error) {
  //   throw new Error(`🚨 Failed to like post. ${error}`);
  // }
  return apiRequest({
    method: 'POST',
    url: `${API_ENDPOINTS.POST.LIKE_POST}/${postId}`,
    errorMessage: 'Fail to like post'
  });
};

export const unlikePost = async (postId: string): Promise<void> => {
  // try {
  //   await postApi.post(`/${postId}/unlike`, {}, { headers: getAuthorizedTokenHeader() });
  // } catch (error) {
  //   throw new Error(`🚨 Failed to unlike post. ${error}`);
  // }
  return apiRequest({
    method: 'POST',
    url: `${API_ENDPOINTS.POST.UNLIKE_POST}/${postId}`,
    errorMessage: 'Fail to unlike post'
  });
};

export const addComment = async (postId: string, content: string): Promise<void> => {
  // try {
  //   await postApi.post(`/${postId}/comment`, { content }, { headers: getAuthorizedTokenHeader() });
  // } catch (error) {
  //   throw new Error(`🚨 Failed to comment post. ${error}`);
  // }
  return apiRequest({
    method: 'POST',
    url: `${API_ENDPOINTS.POST.ADD_COMMENT}/${postId}`,
    data: { content },
    errorMessage: 'Fail to comment'
  });
};
