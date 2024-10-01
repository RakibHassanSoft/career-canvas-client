/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../AxiosHooks/useAxiosPublic';

export const getExperience = () => {
  const axiosPublic = useAxiosPublic()
  return useQuery(['experience'], async () => {
    const { data } = await axiosPublic.get('/getExperience');
    return data;
  });
};
