import { useQuery } from '@tanstack/react-query';
import { getClient } from '../api/client';
import catchError from '../api/catchError';
import { message } from 'antd';
import { AudioData, History, Playlist } from '../types/audio';

const fetchLatestAudios = async (): Promise<AudioData[]> => {
  const client = await getClient();
  const { data } = await client.get('/audio/latest');
  return data.audios;
};

export const useFetchLatestAudios = () => {
  const { data, isError, error, isLoading, isFetching } = useQuery({
    queryKey: ['latest-audios'],
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
    queryKey: ['recommended'],
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
    queryKey: ['uploads-by-profile'],
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
    queryKey: ['playlist'],
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
    queryKey: ['favorite'],
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
    queryKey: ['histories'],
    queryFn: fetchHistories,
  });
  if (isError) {
    const errorMessage = catchError(error);
    message.error(errorMessage);
  }
  return { data, isLoading, isFetching };
};
