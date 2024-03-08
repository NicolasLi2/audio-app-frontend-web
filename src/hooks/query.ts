import { useQuery } from '@tanstack/react-query';
import { message } from 'antd';
import catchError from '../api/catchError';
import { getClient } from '../api/client';
import { AudioData, History, Playlist } from '../types/audio';

export enum QueryKeys {
  LATEST_AUDIOS = 'latest-audios',
  RECOMMENDED = 'recommended',
  UPLOADS_BY_PROFILE = 'uploads-by-profile',
  PLAYLIST = 'playlist',
  FAVORITE = 'favorite',
  HISTORIES = 'histories',
}

const fetchLatestAudios = async (): Promise<AudioData[]> => {
  const client = await getClient();
  const { data } = await client.get('/audio/latest');
  return data.audios;
};

export const useFetchLatestAudios = () => {
  const { data, isError, error, isLoading, isFetching } = useQuery({
    // queryKey: ['latest-audios'],
    queryKey: [QueryKeys.LATEST_AUDIOS],
    queryFn: fetchLatestAudios,
  });
  if (isError) {
    const errorMessage = catchError(error);
    message.error(errorMessage);
  }
  return { data, isLoading, isFetching };
};

const fetchRecommended = async (): Promise<AudioData[]> => {
  const client = await getClient();
  const { data } = await client.get('/profile/recommended');
  return data.audios;
};

export const useFetchRecommended = () => {
  const { data, isError, error, isLoading, isFetching } = useQuery({
    // queryKey: ['recommended'],
    queryKey: [QueryKeys.RECOMMENDED],
    queryFn: fetchRecommended,
  });
  if (isError) {
    const errorMessage = catchError(error);
    message.error(errorMessage);
  }
  return { data, isLoading, isFetching };
};

const fetchUploadsByProfile = async (): Promise<AudioData[]> => {
  const client = await getClient();
  const { data } = await client.get('/profile/uploads');
  return data.audios;
};

export const useFetchUploadsByProfile = () => {
  const { data, isError, error, isLoading, isFetching } = useQuery({
    // queryKey: ['uploads-by-profile'],
    queryKey: [QueryKeys.UPLOADS_BY_PROFILE],
    queryFn: fetchUploadsByProfile,
  });
  if (isError) {
    const errorMessage = catchError(error);
    message.error(errorMessage);
  }
  return { data, isLoading, isFetching };
};

const fetchPlaylist = async (): Promise<Playlist[]> => {
  const client = await getClient();
  const { data } = await client.get('/playlist/by-profile');
  return data.playlist;
};

export const useFetchPlaylist = () => {
  const { data, isError, error, isLoading, isFetching } = useQuery({
    // queryKey: ['playlist'],
    queryKey: [QueryKeys.PLAYLIST],
    queryFn: fetchPlaylist,
  });
  if (isError) {
    const errorMessage = catchError(error);
    message.error(errorMessage);
  }
  return { data, isLoading, isFetching };
};

const fetchFavorite = async (): Promise<AudioData[]> => {
  const client = await getClient();
  const { data } = await client.get('/favorite');
  return data.audios;
};

export const useFetchFavorite = () => {
  const { data, isError, error, isLoading, isFetching } = useQuery({
    // queryKey: ['favorite'],
    queryKey: [QueryKeys.FAVORITE],
    queryFn: fetchFavorite,
  });
  if (isError) {
    const errorMessage = catchError(error);
    message.error(errorMessage);
  }
  return { data, isLoading, isFetching };
};

const fetchHistories = async (): Promise<History[]> => {
  const client = await getClient();
  const { data } = await client.get('/history');
  return data.histories;
};

export const useFetchHistories = () => {
  const { data, isError, error, isLoading, isFetching } = useQuery({
    // queryKey: ['histories'],
    queryKey: [QueryKeys.HISTORIES],
    queryFn: fetchHistories,
  });
  if (isError) {
    const errorMessage = catchError(error);
    message.error(errorMessage);
  }
  return { data, isLoading, isFetching };
};
