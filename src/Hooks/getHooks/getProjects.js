/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../AxiosHooks/useAxiosPublic';

export const getProjects = () => {
  const axiosPublic = useAxiosPublic()
  return useQuery(['projects'], async () => {
    const { data } = await axiosPublic.get('/api/projects');
    return data;
  });
};
