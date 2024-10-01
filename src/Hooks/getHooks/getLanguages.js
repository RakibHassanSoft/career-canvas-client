/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../AxiosHooks/useAxiosPublic';

export const getLanguages = () => {
  const axiosPublic = useAxiosPublic()
  return useQuery(['languages'], async () => {
    const { data } = await axiosPublic.get('/getLanguagesByUserId');
    return data;
  });
};
