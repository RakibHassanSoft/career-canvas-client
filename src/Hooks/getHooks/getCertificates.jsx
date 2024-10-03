/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

const getCertificates = () => {
  const [certificatesData, setCertificatesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://clean-server.onrender.com/api/certificates/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1');
        const data = await res.json();
        setCertificatesData(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching certificates data:", error);
      }
    };

    fetchData();
  }, []);

  // Extract the certificates array and templateId from the fetched data
  const certificates = certificatesData?.certificates; // Assuming the API response has a 'certificates' field
  const templateId = certificatesData?.templateId;

  return { certificates, templateId };
};

export default getCertificates;

