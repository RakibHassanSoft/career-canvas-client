/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getAwards = () => {
  return useQuery(['awards'], async () => {
    const { data } = await axios.get('/api/awards');
    return data;
  });
};
