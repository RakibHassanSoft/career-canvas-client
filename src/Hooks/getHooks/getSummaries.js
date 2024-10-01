/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../AxiosHooks/useAxiosPublic';

export const getSummaries = () => {
  const axiosPublic = useAxiosPublic()
  return useQuery(['summaries'], async () => {
    const { data } = await axiosPublic.get('/api/summaries');
    return data;
  });
};
