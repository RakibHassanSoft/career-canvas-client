

const Resume3 = (props) => {
  console.log(props)
  const {personalInfo,skills,careerObjective,projects,education,experience,languages,certificates, awards }=props?.props

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg">
      {/* Title */}
      <header className="text-center mb-6 bg-blue-800 p-4 rounded">
        <h1 className="text-4xl font-bold uppercase text-white">{personalInfo?.name || "Your Name"}</h1>
        <h2 className="text-xl text-white">{careerObjective ? careerObjective : "Your Profession"}</h2>
      </header>

      {/* Contact Summary */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <ul className="text-gray-700">
          <li>Email: <a href={`mailto:${personalInfo?.email}`} className="text-blue-500">{personalInfo?.email || "email@example.com"}</a></li>
          <li>Phone: {personalInfo?.phone || "(123) 456-7890"}</li>
          <li>Location: {personalInfo?.location || "Staten Island, New York"}</li>
          <li>Website: <a href={personalInfo?.website} className="text-blue-500" target="_blank" rel="noopener noreferrer">{personalInfo?.website || "www.yourwebsite.com"}</a></li>
          <li>LinkedIn: <a href={personalInfo?.linkedin} className="text-blue-500" target="_blank" rel="noopener noreferrer">{personalInfo?.linkedin || "LinkedIn Profile"}</a></li>
        </ul>
      </section>

      {/* Career Objective */}
      <section className="border-b-2 pb-4 mb-4">
        <h3 className="text-lg font-semibold">Career Objective</h3>
        <p>
          {careerObjective || "Your career objective goes here."}
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
        {skills && skills.length > 0 ? (
          <ul className="list-disc list-inside">
            {skills.map((skill, index) => (
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
