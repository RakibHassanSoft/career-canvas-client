/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../AxiosHooks/useAxiosPublic';

export const getUsers = () => {
  const axiosPublic = useAxiosPublic()
  return useQuery(['users'], async () => {
    const { data } = await axiosPublic.get('/users');
    // console.log(data)
    return data;
  });
};