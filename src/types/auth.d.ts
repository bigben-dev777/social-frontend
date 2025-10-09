import { IAuthUser, IUser } from './user';

export interface AuthState {
  isLoggedIn: boolean;
  user: IAuthUser | null;
  token: string | null;
}
