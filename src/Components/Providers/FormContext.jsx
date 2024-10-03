// src/Context/FormContext.js
import { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      phone: '',
      email: '',
      linkedin: '',
      github: ''
    },
    careerObjective: '',
    education: [],
    skills: '',
    projects: [],
    languages: '',
    resumeType: 'resume1' // Default value
  });

  const updatePersonalInfo = (data) => {
    setFormData((prev) => ({ ...prev, personalInfo: data }));
  };

  const updateCareerObjective = (data) => {
    setFormData((prev) => ({ ...prev, careerObjective: data }));
  };

  const updateEducation = (data) => {
    setFormData((prev) => ({ ...prev, education: data }));
  };

  const updateSkills = (data) => {
    setFormData((prev) => ({ ...prev, skills: data }));
  };

  const updateProjects = (data) => {
    setFormData((prev) => ({ ...prev, projects: data }));
  };

  const updateLanguages = (data) => {
    setFormData((prev) => ({ ...prev, languages: data }));
  };

  const setResumeType = (type) => {
    setFormData((prev) => ({ ...prev, resumeType: type }));
  };

  return (
    <FormContext.Provider value={{
      formData,
      updatePersonalInfo,
      updateCareerObjective,
      updateEducation,
      updateSkills,
      updateProjects,
      updateLanguages,
      setResumeType
    }}>
      {children}
    </FormContext.Provider>
  );
};
