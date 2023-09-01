import axios from 'axios';

export const api = axios.create({
  headers: {
    Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
  },
  baseURL: process.env.API_URL,
});
