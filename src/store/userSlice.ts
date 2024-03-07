import { createSlice } from '@reduxjs/toolkit';

export interface Profile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  verified: boolean;
  followers: number;
  following: number;
}

interface AuthState {
  profile: null | Profile;
  loggedIn: boolean;
  busy: boolean;
}

const initialState: AuthState = {
  profile: null,
  loggedIn: false,
  busy: false,
};

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProfile(state, action) {
      state.profile = action.payload;
    },
    updateLoggedIn(state, action) {
      state.loggedIn = action.payload;
    },
    updateBusy(state, action) {
      state.busy = action.payload;
    },
  },
});

export const { updateProfile, updateLoggedIn, updateBusy } = slice.actions;
export default slice.reducer;
