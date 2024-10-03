/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

const getExperience = () => {
  const [experienceData, setExperienceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://clean-server.onrender.com/api/Experience/getExperience/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1');
        const data = await res.json();
        
        // Check if the data array is not empty
        if (Array.isArray(data) && data?.length > 0) {
          setExperienceData(data[0]); // Store the first entry of the fetched data
        }
      } catch (error) {
        console.error("Error fetching experience data:", error);
      }
    };

    fetchData();
  }, []); // This will run once when the component mounts

  // Extract the experience array and templateId from the fetched data
  const experience = experienceData?.experience || []; // Default to an empty array if experience is not found
  const templateId = experienceData?.templateId;

  console.log(experience); // For debugging purposes
  return { experience, templateId };
};

export default getExperience;
