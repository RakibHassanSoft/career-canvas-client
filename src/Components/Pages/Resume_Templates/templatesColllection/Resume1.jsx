import getAwards from "../../../../Hooks/getHooks/getAwards";
import getCareerObjectives from "../../../../Hooks/getHooks/getCareerObjectives";
import getCertificates from "../../../../Hooks/getHooks/getCertificates";
import getEducation from "../../../../Hooks/getHooks/getEducation";
import getExperience from "../../../../Hooks/getHooks/getExperience";
import getLanguages from "../../../../Hooks/getHooks/getLanguages";
import getNameContacts from "../../../../Hooks/getHooks/getNameContacts";
import getProjects from "../../../../Hooks/getHooks/getProjects";
import getSkills from "../../../../Hooks/getHooks/getSkills";


const Resume1 = () => {
  let { contactInfo, name } = getNameContacts()
  let { skillData } = getSkills()
  let { careerObjective } = getCareerObjectives()
  let { projects } = getProjects()
  let { education } = getEducation()
  let { experience } = getExperience()
  let { languages } = getLanguages()
  let { certificates } = getCertificates()
  let { awards } = getAwards()


  console.log(experience)
  // console.log(skillData)


  // let skillData=
  return (
    <div className="w-full mx-auto p-8 bg-gray-50">
      {/* Resume Title */}
      <header className="flex justify-between items-center border-b-2 pb-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold">{name}</h1>
          <h2 className="text-lg font-light text-gray-500">Web Developer</h2>
        </div>
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* Contract Summary */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Contact Summary</h3>
        <p>Phone: {contactInfo?.phone}</p>
        <p>Email: {contactInfo?.email}</p>
        <p>Website: <a href={contactInfo?.website}>{contactInfo?.website}</a></p>
      </section>

      {/* Career Objective */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Career Objective</h3>
        <p>
          {careerObjective}
        </p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Skills</h3>
        {
          skillData?.length > 0 && skillData.map((item, index) => (
            <ul key={index} className="list-disc ml-4">
              <li>{item}</li>
            </ul>
          ))
        }


      </section>

      {/* Projects */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Projects</h3>

        {projects?.map((project, index) => (
          <div key={project._id} className="mb-4">
            <h4 className="text-xl font-bold">
              Project {index + 1}: {project.title || `Project ${index + 1}`}
            </h4>
            <p className="text-gray-600">
              {project.description || 'Project description goes here.'}
            </p>
            <ul className="list-disc ml-4 mt-2">
              {project.features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              )) || (
                  <>
                    <li>Feature 1 of the project</li>
                    <li>Feature 2 of the project</li>
                  </>
                )}
            </ul>
          </div>
        ))}
      </section>

      {/* Education Details */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Education</h3>
        {education && education.length > 0 ? (
          education.map((edu) => (
            <div key={edu._id} className="mb-4">
              <h4 className="text-xl font-bold">{edu.degree}</h4>
              <p className="text-gray-600">{edu.institution}, {edu.startDate} - {edu.endDate}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No education data available.</p>
        )}
      </section>

      {/* Languages */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Languages</h3>
        <ul className="list-disc ml-4">
          {languages && languages.length > 0 ? (
            languages.map((language, index) => (
              <li key={index}>{language}</li> // You can adjust the fluency level as needed
            ))
          ) : (
            <li>No languages available.</li>
          )}
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Experience</h3>
        {experience && experience.length > 0 ? (
          experience.map((exp) => (
            <div key={exp._id} className="mb-6">
              <h4 className="text-xl font-bold">{exp.jobTitle}</h4>
              <p className="text-gray-600">{exp.company}, {exp.duration}</p>
              <ul className="list-disc ml-4 mt-2">
                {exp.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No experience data available.</p>
        )}
      </section>
      {/* Certificates */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Certificates</h3>
        {certificates && certificates.length > 0 ? (
          <ul className="list-disc ml-4">
            {certificates.map(cert => (
              <li key={cert._id}>
                {cert.title} by {cert.institution}
              </li>
            ))}
          </ul>
        ) : (
          <p>No certificates available.</p>
        )}
      </section>

      {/* Awards */}
      <section className="mb-8">
    <h3 className="text-2xl font-semibold mb-2">Awards</h3>
    {awards && awards.length > 0 ? (
      <ul className="list-disc ml-4">
        {awards.map((award) => (
          <li key={award._id}>
            {award.title} - {award.organization} ({award.year})
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

export default Resume1;
