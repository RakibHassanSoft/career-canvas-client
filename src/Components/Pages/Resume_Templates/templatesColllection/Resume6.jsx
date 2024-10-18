


const Resume6 = (props) => {
  const {personalInfo, skills,careerObjective,projects,education,experience,languages,certificates, awards }=props?.props

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white shadow-lg">
      {/* Title and Contact */}
      <div className="border-b pb-4 mb-4">
        <h1 className="text-4xl font-bold text-orange-600 mb-2">{personalInfo?.name}</h1>
        <h2 className="text-xl text-gray-600">{personalInfo?.title || "Customer Success Manager"}</h2>
        <div className="mt-2">
          <p>📞 {personalInfo?.phone || "(123) 456-7899"}</p>
          <p>📧 {personalInfo?.email || "john.xander@gmail.com"}</p>
          <p>📍 {personalInfo?.location || "Amsterdam, Netherlands"}</p>
          {personalInfo?.linkedin && (
            <a href={personalInfo.linkedin} className="text-blue-500 underline">
              LinkedIn
            </a>
          )}
        </div>
      </div>

      {/* Career Objective */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Career Objective</h3>
        <p className="text-gray-700">
          {careerObjective || "Enthusiastic Customer Success Manager with seven years of experience coordinating Customer Success staff, analyzing complaints, and implementing customer retention campaigns. Focused on building excellent client relationships and resolving issues efficiently."}
        </p>
      </section>

      {/* Summary */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Summary</h3>
        <p className="text-gray-700">
          {`A dedicated and result-driven ${personalInfo?.title || "Customer Success Manager"} with a solid understanding of front-end and back-end development. Experienced in working in agile environments and using JavaScript, React, Node.js, and other modern technologies to build efficient and scalable applications.`}
        </p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Experience</h3>
        {experience && experience.length > 0 ? (
          experience.map((exp) => (
            <div key={exp._id} className="mt-4">
              <h4 className="text-xl font-bold">{exp.jobTitle || "Senior Customer Success Manager"}</h4>
              <p className="text-gray-500">{exp.company || "Blanchette"} | {exp.duration || "2017 - Ongoing"} | {exp.location || "Amsterdam, Netherlands"}</p>
              <ul className="list-disc ml-5 text-gray-700 mt-2">
                {exp.responsibilities && exp.responsibilities.length > 0 ? (
                  exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))
                ) : (
                  <>
                    <li>Achieved an average 115% Net Retention Rate (NRR) on a target of 102%.</li>
                    <li>Developed an end-user training curriculum for Microsoft Office 365.</li>
                    <li>Managed an EMEA book of business of USD $2-$2.5M in ARR.</li>
                  </>
                )}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No experience data available.</p>
        )}
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Projects</h3>
        {projects && projects.length > 0 ? (
          projects.map((project) => (
            <div key={project._id} className="mt-4">
              <h4 className="text-xl font-bold">{project.title || "Project Title"}</h4>
              <p className="text-gray-700">{project.description || "Project description goes here."}</p>
              {project.features && project.features.length > 0 ? (
                <ul className="list-disc ml-5 text-gray-700 mt-2">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <ul className="list-disc ml-5 text-gray-700 mt-2">
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

      {/* Skills */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Skills</h3>
        {skills && skills.length > 0 ? (
          <ul className="list-disc ml-5 text-gray-700">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No skills data available.</p>
        )}
      </section>

      {/* Awards */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Awards</h3>
        {awards && awards.length > 0 ? (
          <ul className="list-disc ml-5 text-gray-700">
            {awards.map((award) => (
              <li key={award._id}>
                {award.title} - {award.organization} ({award.year})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No awards data available.</p>
        )}
      </section>

      {/* Certificates */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Certificates</h3>
        {certificates && certificates.length > 0 ? (
          <ul className="list-disc ml-5 text-gray-700">
            {certificates.map((cert) => (
              <li key={cert._id}>
                {cert.title} by {cert.institution}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No certificates available.</p>
        )}
      </section>

      {/* Education */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Education</h3>
        {education && education.length > 0 ? (
          education.map((edu) => (
            <div key={edu._id} className="mt-4">
              <h4 className="text-xl font-bold">{edu.degree || "Bachelor of Science in Computer Science"}</h4>
              <p className="text-gray-500">{edu.institution || "University of Amsterdam"} • {edu.startYear || "2013"} - {edu.endYear || "2014"}</p>
              <p className="text-gray-700 mt-2">{edu.description || "Education description goes here."}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-700">No education data available.</p>
        )}
      </section>

      {/* Languages */}
      <section className="mb-6">
        <h3 className="text-2xl font-semibold text-orange-600 mb-4">Languages</h3>
        {languages && languages.length > 0 ? (
          <ul className="list-disc ml-5 text-gray-700">
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700">No languages data available.</p>
        )}
      </section>
    </div>
  );
};

export default Resume6;
