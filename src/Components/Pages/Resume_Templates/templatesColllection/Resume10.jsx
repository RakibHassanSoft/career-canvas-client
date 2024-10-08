
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { MdOutlineAssignment } from 'react-icons/md';

// Import your custom hooks
import getAwards from "../../../../Hooks/getHooks/getAwards";
import getCareerObjectives from "../../../../Hooks/getHooks/getCareerObjectives";
import getCertificates from "../../../../Hooks/getHooks/getCertificates";
import getEducation from "../../../../Hooks/getHooks/getEducation";
import getExperience from "../../../../Hooks/getHooks/getExperience";
import getLanguages from "../../../../Hooks/getHooks/getLanguages";
import getNameContacts from "../../../../Hooks/getHooks/getNameContacts";
import getProjects from "../../../../Hooks/getHooks/getProjects";
import getSkills from "../../../../Hooks/getHooks/getSkills";

const Resume10 = () => {
  // Fetch data using custom hooks
  const { contactInfo, name, loading: contactLoading, error: contactError } = getNameContacts();
  const { skillData, loading: skillsLoading, error: skillsError } = getSkills();
  const { careerObjective, loading: objectiveLoading, error: objectiveError } = getCareerObjectives();
  const { projects, loading: projectsLoading, error: projectsError } = getProjects();
  const { education, loading: educationLoading, error: educationError } = getEducation();
  const { experience, loading: experienceLoading, error: experienceError } = getExperience();
  const { languages, loading: languagesLoading, error: languagesError } = getLanguages();
  const { certificates, loading: certificatesLoading, error: certificatesError } = getCertificates();
  const { awards, loading: awardsLoading, error: awardsError } = getAwards();

  // Handle loading and error states
  if (
    contactLoading || skillsLoading || objectiveLoading || projectsLoading ||
    educationLoading || experienceLoading || languagesLoading ||
    certificatesLoading || awardsLoading
  ) {
    return <div className="text-center p-10">Loading...</div>;
  }

  if (
    contactError || skillsError || objectiveError || projectsError ||
    educationError || experienceError || languagesError ||
    certificatesError || awardsError
  ) {
    return <div className="text-center p-10 text-red-500">Error loading data.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-lg overflow-hidden">
      {/* Title and Contact */}
      <div className="bg-blue-600 p-6 text-white">
        <h1 className="text-4xl font-bold">{name || "Your Name"}</h1>
        <h2 className="text-lg">{careerObjective || "Web Developer"}</h2>
        <div className="mt-4 flex justify-end space-x-4">
          {contactInfo?.phone && (
            <div className="flex items-center">
              <FaPhone className="mr-1" /> <p>{contactInfo.phone}</p>
            </div>
          )}
          {contactInfo?.email && (
            <div className="flex items-center">
              <FaEnvelope className="mr-1" /> <p>{contactInfo.email}</p>
            </div>
          )}
          {contactInfo?.website && (
            <div className="flex items-center">
              <FaLinkedin className="mr-1" /> <a href={contactInfo.website} className="underline">{contactInfo.website}</a>
            </div>
          )}
        </div>
      </div>

      {/* Career Objective */}
      <section className="p-6 bg-white">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Career Objective
        </h3>
        <p className="text-gray-700">
          {careerObjective || "Driven and passionate sales executive with over 5 years of experience in account management, customer relationship management, and supply chain services. Looking to leverage my expertise to help companies achieve revenue growth and customer satisfaction."}
        </p>
      </section>

      {/* Summary */}
      <section className="p-6 bg-white border-t">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Summary
        </h3>
        <p className="text-gray-700">
          {experience && experience.length > 0 ? 
            "A dedicated and result-driven developer with a solid understanding of front-end and back-end development. Experienced in working in agile environments and using JavaScript, React, Node.js, and other modern technologies to build efficient and scalable applications."
            : "A dedicated and result-driven professional with experience in [Your Field]."}
        </p>
      </section>

      {/* Skills */}
      <section className="p-6 bg-white border-t">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Skills
        </h3>
        {skillData && skillData.length > 0 ? (
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {skillData.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No skills data available.</p>
        )}
      </section>

      {/* Experience */}
      <section className="p-6 bg-white border-t">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Experience
        </h3>
        {experience && experience.length > 0 ? (
          experience.map((exp) => (
            <div key={exp._id} className="space-y-2 mb-4">
              <h4 className="text-lg font-bold">{exp.jobTitle || "Job Title"}</h4>
              <p className="text-gray-600">{exp.company || "Company Name"} • {exp.duration || "Duration"}</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {exp.responsibilities && exp.responsibilities.length > 0 ? (
                  exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))
                ) : (
                  <li>No responsibilities listed.</li>
                )}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No experience data available.</p>
        )}
      </section>

      {/* Projects */}
      <section className="p-6 bg-white border-t">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Projects
        </h3>
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <div key={project._id} className="space-y-2 mb-4">
              <h4 className="text-lg font-bold">{project.title || `Project ${index + 1}`}</h4>
              <p className="text-gray-700">{project.description || "Project description goes here."}</p>
              {project.features && project.features.length > 0 ? (
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Feature 1 of the project</li>
                  <li>Feature 2 of the project</li>
                </ul>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-700">No projects data available.</p>
        )}
      </section>

      {/* Certificates */}
      <section className="p-6 bg-white border-t">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Certificates
        </h3>
        {certificates && certificates.length > 0 ? (
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {certificates.map(cert => (
              <li key={cert._id}>
                {cert.title || "Certificate Title"} by {cert.institution || "Institution Name"}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No certificates available.</p>
        )}
      </section>

      {/* Education */}
      <section className="p-6 bg-white border-t">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Education
        </h3>
        {education && education.length > 0 ? (
          education.map((edu) => (
            <div key={edu._id} className="space-y-2 mb-4">
              <h4 className="text-lg font-bold">{edu.degree || "Degree"}</h4>
              <p className="text-gray-600">{edu.institution || "Institution"} • {edu.startYear || "Start Year"} - {edu.endYear || "End Year"}</p>
              <p className="text-gray-700">{edu.description || "Education description goes here."}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No education data available.</p>
        )}
      </section>

      {/* Languages */}
      <section className="p-6 bg-white border-t">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Languages
        </h3>
        {languages && languages.length > 0 ? (
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No languages data available.</p>
        )}
      </section>

      {/* Awards */}
      <section className="p-6 bg-white border-t">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <MdOutlineAssignment className="mr-2" />
          Awards
        </h3>
        {awards && awards.length > 0 ? (
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {awards.map((award) => (
              <li key={award._id}>
                {award.title || "Award Title"} - {award.organization || "Organization"} ({award.year || "Year"})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No awards data available.</p>
        )}
      </section>
    </div>
  );
};

export default Resume10;
