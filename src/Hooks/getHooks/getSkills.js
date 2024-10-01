/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../AxiosHooks/useAxiosPublic';

export const getSkills = () => {
  const axiosPublic = useAxiosPublic()
  return useQuery(['skills'], async () => {
    const { data } = await axiosPublic.get('/skills');
    return data;
  });
};
