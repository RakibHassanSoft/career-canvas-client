/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getProjects = () => {
  return useQuery(['projects'], async () => {
    const { data } = await axios.get('/api/projects');
    return data;
  });
};
