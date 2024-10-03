/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import useAxiosPublic from '../AxiosHooks/useAxiosPublic';

export const getNameContacts = () => {
  const [nameContact, setNameContact] = useState(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosPublic.get('https://clean-server.onrender.com/api/name/name-contact/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1');
        setNameContact(data); // Store the data in the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [axiosPublic]);

  // You can now return the structured data from the API response
  const contactInfo = nameContact?.contact;
  const name = nameContact?.name;
  const templateId = nameContact?.templateId;

  return { contactInfo, name, templateId };
};

export default getNameContacts;
