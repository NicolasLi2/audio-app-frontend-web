import { Profile } from '../store/userSlice';

export interface SignInReturnType {
  profile: Profile;
  token: string;
}

export enum Keys {
  ACCESS_TOKEN = 'access-token',
  USER_PROFILE = 'user-profile',
}
