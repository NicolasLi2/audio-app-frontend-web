import axios, { CreateAxiosDefaults } from 'axios';
import { Keys } from '../types/user';

const baseURL = 'http://localhost:8080';

type headers = CreateAxiosDefaults['headers'];

export const getClient = async (headers?: headers) => {
  const token = localStorage.getItem(Keys.ACCESS_TOKEN);
  if (!token) return axios.create({ baseURL });

  return axios.create({
    baseURL,
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  });
};
