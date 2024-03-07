import { Profile } from '../store/userSlice';

export interface SignInReturnType {
  profile: Profile;
  token: string;
}
