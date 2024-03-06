import { useQuery } from '@tanstack/react-query';
import { getClient } from '../api/client';
import catchError from '../api/catchError';
import { message } from 'antd';
import { AudioData } from '../types/audio';

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