/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

const getLanguages = () => {
  const [languagesData, setLanguagesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://clean-server.onrender.com/api/language/languages/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1');
        const data = await res.json();
        setLanguagesData(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching languages data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means the effect will run only once after the component mounts

  // Extract the languages array and templateId from the fetched data
  const languages = languagesData?.languages; // Assuming the API response has a 'languages' field
  const templateId = languagesData?.templateId;

  return { languages, templateId };
};

export default getLanguages;
