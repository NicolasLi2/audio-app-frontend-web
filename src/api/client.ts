import axios, { CreateAxiosDefaults } from 'axios';

const baseURL = 'http://localhost:8080';

type headers = CreateAxiosDefaults['headers'];

export const getClient = async (headers?: headers) => {
  const token = localStorage.getItem('access-token');
  if (!token) return axios.create({ baseURL });

  return axios.create({
    baseURL,
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  });
};
