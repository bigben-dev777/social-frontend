import axios from 'axios';
import { BASE_URL } from '@/configs';
import { Post } from '@/types';
import { getAuthorizedTokenHeader } from '@/util';

const postApi = axios.create({ baseURL: `${BASE_URL}/post` });

export const getUserPosts = async (): Promise<Post[]> => {
  try {
    const response = await postApi.get('/', { headers: getAuthorizedTokenHeader() });

    return response.data;
  } catch (error) {
    throw new Error(`🚨 Failed to fetch all of my posts ${error}`);
  }
};

export const getFeed = async (): Promise<Post[]> => {
  try {
    const response = await postApi.get('/feed', { headers: getAuthorizedTokenHeader() });

    return response.data;
  } catch (error) {
    throw new Error(`🚨 Failed to fetch feed. ${error}`);
  }
};

export const addPost = async (content: string): Promise<void> => {
  try {
    await postApi.post('/', { content }, { headers: getAuthorizedTokenHeader() });
  } catch (error) {
    throw new Error(`🚨 Failed to add post ${error}`);
  }
};

export const likePost = async (postId: string): Promise<void> => {
  try {
    await postApi.post(`/${postId}/like`, {}, { headers: getAuthorizedTokenHeader() });
  } catch (error) {
    throw new Error(`🚨 Failed to like post. ${error}`);
  }
};

export const unlikePost = async (postId: string): Promise<void> => {
  try {
    await postApi.post(`/${postId}/unlike`, {}, { headers: getAuthorizedTokenHeader() });
  } catch (error) {
    throw new Error(`🚨 Failed to unlike post. ${error}`);
  }
};

export const addComment = async (postId: string, content: string): Promise<void> => {
  try {
    await postApi.post(`/${postId}/comment`, { content }, { headers: getAuthorizedTokenHeader() });
  } catch (error) {
    throw new Error(`🚨 Failed to comment post. ${error}`);
  }
};
