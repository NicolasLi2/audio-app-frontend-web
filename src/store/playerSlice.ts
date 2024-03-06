import { createSlice } from '@reduxjs/toolkit';
import { AudioData } from '../types/audio';

interface Player {
  onGoingAudio: AudioData | null;
  onGoingList: AudioData[];
  playbackRate: number;
  isPlaying: boolean;
}

const initialState: Player = {
  onGoingAudio: null,
  onGoingList: [],
  playbackRate: 1,
  isPlaying: false,
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
    updateIsPlaying(state, action) {
      state.isPlaying = action.payload;
    },
  },
});

export const {
  updateOnGoingAudio,
  updateOnGoingList,
  updatePlaybackRate,
  updateIsPlaying,
} = slice.actions;
export default slice.reducer;
