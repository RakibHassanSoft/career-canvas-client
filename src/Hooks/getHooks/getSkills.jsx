/* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
const getSkills = () => {
  const [skill, setSkill] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://clean-server.onrender.com/api/skills/k7Fs6Hfy9CWjLe2h6A42H2DAZxg2/1');
        const data = await res.json();
        setSkill(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(skill?.skills?.technologies);
  // const skillData = skill?.skills?.technologies
  const skillData = skill?.skills
  const temId = skill?.templateId
  return { skillData, temId }

};

export default getSkills;



