
import getAwards from "../../../../Hooks/getHooks/getAwards";
import getCareerObjectives from "../../../../Hooks/getHooks/getCareerObjectives";
import getCertificates from "../../../../Hooks/getHooks/getCertificates";
import getEducation from "../../../../Hooks/getHooks/getEducation";
import getExperience from "../../../../Hooks/getHooks/getExperience";
import getLanguages from "../../../../Hooks/getHooks/getLanguages";
import getNameContacts from "../../../../Hooks/getHooks/getNameContacts";
import getProjects from "../../../../Hooks/getHooks/getProjects";
import getSkills from "../../../../Hooks/getHooks/getSkills";

const Resume3 = () => {
  // Fetch data using custom hooks
  const { contactInfo, name } = getNameContacts();
  const { skillData } = getSkills();
  const { careerObjective } = getCareerObjectives();
  const { projects } = getProjects();
  const { education } = getEducation();
  const { experience } = getExperience();
  const { languages } = getLanguages();
  const { certificates } = getCertificates();
  const { awards } = getAwards();

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg">
      {/* Title */}
      <header className="text-center mb-6 bg-blue-800 p-4 rounded">
        <h1 className="text-4xl font-bold uppercase text-white">{name || "Your Name"}</h1>
        <h2 className="text-xl text-white">{careerObjective ? careerObjective.title : "Your Profession"}</h2>
      </header>

      {/* Contact Summary */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <ul className="text-gray-700">
          <li>Email: <a href={`mailto:${contactInfo?.email}`} className="text-blue-500">{contactInfo?.email || "email@example.com"}</a></li>
          <li>Phone: {contactInfo?.phone || "(123) 456-7890"}</li>
          <li>Location: {contactInfo?.location || "Staten Island, New York"}</li>
          <li>Website: <a href={contactInfo?.website} className="text-blue-500" target="_blank" rel="noopener noreferrer">{contactInfo?.website || "www.yourwebsite.com"}</a></li>
          <li>LinkedIn: <a href={contactInfo?.linkedin} className="text-blue-500" target="_blank" rel="noopener noreferrer">{contactInfo?.linkedin || "LinkedIn Profile"}</a></li>
        </ul>
      </section>

      {/* Career Objective */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Career Objective</h3>
        <p>
          {careerObjective?.description || "Your career objective goes here."}
        </p>
      </section>

      {/* Work Experience */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Work Experience</h3>
        {experience && experience.length > 0 ? (
          experience.map((exp) => (
            <div key={exp._id} className="mb-4">
              <h4 className="font-bold">{exp.jobTitle || "Job Title"}</h4>
              <p className="italic">{exp.company || "Company Name"} - {exp.duration || "Duration"}</p>
              <ul className="list-disc list-inside">
                {exp.responsibilities && exp.responsibilities.length > 0 ? (
                  exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))
                ) : (
                  <li>Responsibility description goes here.</li>
                )}
              </ul>
            </div>
          ))
        ) : (
          <p>No experience data available.</p>
        )}
      </section>

      {/* Projects */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Projects</h3>
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <div key={project._id} className="mb-4">
              <h4 className="font-bold">{project.title || `Project ${index + 1}`}</h4>
              <p>{project.description || "Project description goes here."}</p>
              {project.features && project.features.length > 0 ? (
                <ul className="list-disc list-inside">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <ul className="list-disc list-inside">
                  <li>Feature 1 of the project</li>
                  <li>Feature 2 of the project</li>
                </ul>
              )}
            </div>
          ))
        ) : (
          <p>No projects data available.</p>
        )}
      </section>

      {/* Education Details */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Education</h3>
        {education && education.length > 0 ? (
          education.map((edu) => (
            <div key={edu._id} className="mb-4">
              <h4 className="font-bold">{edu.degree || "Degree"}</h4>
              <p className="italic">{edu.institution || "Institution Name"}, {edu.startYear || "Start Year"} - {edu.endYear || "End Year"}</p>
              <p>{edu.description || "Education description goes here."}</p>
            </div>
          ))
        ) : (
          <p>No education data available.</p>
        )}
      </section>

      {/* Languages */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Languages</h3>
        {languages && languages.length > 0 ? (
          <ul className="list-disc list-inside">
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        ) : (
          <p>No languages data available.</p>
        )}
      </section>

      {/* Skills */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Skills</h3>
        {skillData && skillData.length > 0 ? (
          <ul className="list-disc list-inside">
            {skillData.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p>No skills data available.</p>
        )}
      </section>

      {/* Certificates */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Certificates</h3>
        {certificates && certificates.length > 0 ? (
          <ul className="list-disc list-inside">
            {certificates.map(cert => (
              <li key={cert._id}>
                {cert.title || "Certificate Title"} by {cert.institution || "Institution Name"}
              </li>
            ))}
          </ul>
        ) : (
          <p>No certificates available.</p>
        )}
      </section>

      {/* Awards */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Awards</h3>
        {awards && awards.length > 0 ? (
          <ul className="list-disc list-inside">
            {awards.map((award) => (
              <li key={award._id}>
                {award.title || "Award Title"} - {award.organization || "Organization"} ({award.year || "Year"})
              </li>
            ))}
          </ul>
        ) : (
          <p>No awards data available.</p>
        )}
      </section>
    </div>
  );
};

export default Resume3;
