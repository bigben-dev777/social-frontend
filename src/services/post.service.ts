import { IPost } from '@/types';
import apiRequest from '@/libs/axios';
import { API_ENDPOINTS } from '@/configs/endpoints';

export const getUserPosts = async (): Promise<IPost[]> => {
  return apiRequest({
    method: 'GET',
    url: API_ENDPOINTS.POST.GET_USER_POSTS,
    errorMessage: 'Fail to fetch user posts'
  });
};

export const getUserPostsByUserId = async (userId: string): Promise<IPost[]> => {
  return apiRequest({
    method: 'GET',
    url: `${API_ENDPOINTS.POST.GET_USER_POSTS}/${userId}`,
    errorMessage: 'Fail to fetch user posts by user id'
  });
};

export const getFeed = async (): Promise<IPost[]> => {
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
  return apiRequest({
    method: 'PUT',
    url: `${API_ENDPOINTS.POST.LIKE_POST}/${postId}`,
    errorMessage: 'Fail to like post'
  });
};

export const unlikePost = async (postId: string): Promise<void> => {
  return apiRequest({
    method: 'PUT',
    url: `${API_ENDPOINTS.POST.UNLIKE_POST}/${postId}`,
    errorMessage: 'Fail to unlike post'
  });
};

export const addComment = async (postId: string, content: string): Promise<void> => {
  return apiRequest({
    method: 'PUT',
    url: `${API_ENDPOINTS.POST.ADD_COMMENT}/${postId}`,
    data: { content },
    errorMessage: 'Fail to comment'
  });
};
