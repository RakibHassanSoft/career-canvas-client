/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

const getEducation = () => {
  const [educationData, setEducationData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://clean-server.onrender.com/api/education/educations/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1');
        const data = await res.json();
        
        // Since the response is an array, we access the first element
        if (data && data.length > 0) {
          setEducationData(data[0]); // Set the first element of the array as the state
        }
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };

    fetchData();
  }, []);

  // Extract the education array and templateId from the fetched data
  const education = educationData?.education; // Accessing the 'education' field inside the first object of the array
  const templateId = educationData?.templateId;

  return { education, templateId };
};

export default getEducation;
