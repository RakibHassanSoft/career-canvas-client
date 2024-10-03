/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import useAxiosPublic from '../AxiosHooks/useAxiosPublic';

export const getCareerObjectives = () => {
  const [careerObjectiveData, setCareerObjectiveData] = useState(null);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosPublic.get('https://clean-server.onrender.com/api/CareerObjective/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1');
        setCareerObjectiveData(data); // Store the data in the state
      } catch (error) {
        console.error("Error fetching career objective:", error);
      }
    };

    fetchData();
  }, [axiosPublic]);

  // Extract the data fields from the response
  const careerObjective = careerObjectiveData?.careerObjective;
  const templateId = careerObjectiveData?.templateId;

  return { careerObjective, templateId };
};

export default getCareerObjectives;
