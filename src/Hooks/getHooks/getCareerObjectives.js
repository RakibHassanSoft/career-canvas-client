/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../AxiosHooks/useAxiosPublic';

export const getCareerObjectives = () => {
  const axiosPublic=useAxiosPublic()
  return useQuery(['careerObjectives'], async () => {
    const { data } = await axiosPublic.get('/CareerObjective');
    return data;
  });
};
