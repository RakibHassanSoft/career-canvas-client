/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';

const getProjects = () => {
  const [projectsData, setProjectsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://clean-server.onrender.com/api/projects/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1');
        const data = await res.json();
        setProjectsData(data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };

    fetchData();
  }, []);

  // Extract the projects array and templateId from the fetched data
  const projects = projectsData?.projects;
  const templateId = projectsData?.templateId;

  return { projects, templateId };
};

export default getProjects;
