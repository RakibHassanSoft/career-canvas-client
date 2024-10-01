/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../AxiosHooks/useAxiosPublic';

export const getTitles = () => {
  const axiosPublic = useAxiosPublic()
  return useQuery(['titles'], async () => {
    const { data } = await axiosPublic.get('/api/titles');
    return data;
  });
};
