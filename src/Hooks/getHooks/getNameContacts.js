/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const getNameContacts = () => {
  return useQuery(['nameContacts'], async () => {
    const { data } = await axios.get('/api/name-contact');
    return data;
  });
};
