/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getLanguages = () => {
  return useQuery(['languages'], async () => {
    const { data } = await axios.get('/getLanguagesByUserId');
    return data;
  });
};
