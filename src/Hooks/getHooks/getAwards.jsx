/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

const getAwards = () => {
  const [awardsData, setAwardsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://clean-server.onrender.com/api/awards/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1');
        const data = await res.json();
        setAwardsData(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching awards data:", error);
      }
    };

    fetchData();
  }, []);

  // Extract the awards array and templateId from the fetched data
  const awards = awardsData?.awards;
  const templateId = awardsData?.templateId;

  return { awards, templateId };
};

export default getAwards;

