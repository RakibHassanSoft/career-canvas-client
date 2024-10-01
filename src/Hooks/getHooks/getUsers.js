/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getUsers = () => {
  return useQuery(['users'], async () => {
    const { data } = await axios.get('/api/users');
    // console.log(data)
    return data;
  });
};