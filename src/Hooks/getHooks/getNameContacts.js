/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../AxiosHooks/useAxiosPublic';

export const getNameContacts = () => {
  const axiosPublic=useAxiosPublic()
  return useQuery(['nameContacts'], async () => {
    const { data } = await axiosPublic.get('/api/name-contact');
    return data;
  });
};
