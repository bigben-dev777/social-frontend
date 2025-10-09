export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: 'auth/signup',
    LOGIN: 'auth/signin'
  },
  USER: {
    EXPLORE: 'profile/explore',
    GET_PROFILE: 'profile/',
    GET_PROFILE_BY_ID: 'profile/',
    FOLLOW: 'profile/follow',
    UNFOLLOW: 'profile/unfollow'
  },
  POST: {
    GET_USER_POSTS: 'post/',
    GET_FEED: 'post/feed',
    ADD_POST: 'post/',
    LIKE_POST: 'post/like',
    UNLIKE_POST: 'post/unlike',
    ADD_COMMENT: 'post/comment'
  }
};
