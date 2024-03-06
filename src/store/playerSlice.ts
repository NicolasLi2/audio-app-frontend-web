import { createSlice } from '@reduxjs/toolkit';
import { AudioData } from '../types/audio';

interface Player {
  onGoingAudio: AudioData | null;
  onGoingList: AudioData[];
  playbackRate: number;
}

const initialState: Player = {
  onGoingAudio: null,
  onGoingList: [],
  playbackRate: 1,
};

const slice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    updateOnGoingAudio(state, action) {
      state.onGoingAudio = action.payload;
    },
    updateOnGoingList(state, action) {
      state.onGoingList = action.payload;
    },
    updatePlaybackRate(state, action) {
      state.playbackRate = action.payload;
    },
  },
});

export const { updateOnGoingAudio, updateOnGoingList, updatePlaybackRate } =
  slice.actions;
export default slice.reducer;
