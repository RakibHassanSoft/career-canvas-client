/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getTitles = () => {
  return useQuery(['titles'], async () => {
    const { data } = await axios.get('/api/titles');
    return data;
  });
};
