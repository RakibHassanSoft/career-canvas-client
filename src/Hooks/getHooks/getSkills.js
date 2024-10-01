/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getSkills = () => {
  return useQuery(['skills'], async () => {
    const { data } = await axios.get('/skills');
    return data;
  });
};
