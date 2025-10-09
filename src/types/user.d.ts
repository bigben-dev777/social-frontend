export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
}

export interface IAuthUser {
  userId: string;
  name: string;
  email: string;
}

export interface IUserLite {
  _id: string;
  name: string;
}

export interface IUserInput {
  email: string;
  password: string;
}

export interface IProfile {
  _id: string;
  user: IUser;
  following: IUserLite[];
  followers: IUserLite[];
  createdAt: Date;
}

export interface IExploreProfile {
  _id: string;
  user: IUser;
  following: IUserLite[];
  followers: IUserLite[];
  isFollowing: boolean;
}

export type IUserInput = Omit<IUser, '_id'>;
