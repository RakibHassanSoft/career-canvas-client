/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../AxiosHooks/useAxiosPublic';

export const getCertificates = () => {
  const axiosPublic=useAxiosPublic()
  return useQuery(['certificates'], async () => {
    const { data } = await axiosPublic.get('/api/certificates');
    return data;
  });
};
