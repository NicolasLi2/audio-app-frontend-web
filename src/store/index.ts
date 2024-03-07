import { combineReducers, configureStore } from '@reduxjs/toolkit';
import playerReducer from './playerSlice';
import userReducer from './userSlice';

const reducer = combineReducers({
  player: playerReducer,
  user: userReducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
