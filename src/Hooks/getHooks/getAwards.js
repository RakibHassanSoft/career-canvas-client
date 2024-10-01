/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../AxiosHooks/useAxiosPublic';



export const getAwards = () => {
  const axiosPublic = useAxiosPublic()
  return useQuery(['awards'], async () => {
    const { data } = await axiosPublic.get('/awards');
    return data;
  });
};
