/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getCertificates = () => {
  return useQuery(['certificates'], async () => {
    const { data } = await axios.get('/api/certificates');
    return data;
  });
};
