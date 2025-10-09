import { IUserLite } from './user';

export interface IPost {
  _id: string;
  user: IUserLite;
  content: string;
  likes: IUserLite[];
  comments: IComment[];
  createdAt: string;
}

export type IPostInput = Pick<IPost, 'user' | 'content'>;

export type IPostLite = Pick<IPost, '_id' | 'user' | 'content'>;

export interface IComment {
  _id: string;
  user: IUserLite;
  content: string;
  createdAt: string;
}

export type ICommentLite = Pick<IComment, '_id' | 'user' | 'content'>;
