/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getSummaries = () => {
  return useQuery(['summaries'], async () => {
    const { data } = await axios.get('/api/summaries');
    return data;
  });
};
