/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getExperience = () => {
  return useQuery(['experience'], async () => {
    const { data } = await axios.get('/getExperience');
    return data;
  });
};
