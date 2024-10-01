/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getCareerObjectives = () => {
  return useQuery(['careerObjectives'], async () => {
    const { data } = await axios.get('/api/CareerObjective');
    return data;
  });
};
