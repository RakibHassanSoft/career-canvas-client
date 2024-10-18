


const Resume7 = (props) => {
  const {contactInfo, name,skillData,careerObjective,projects,education,experience,languages,certificates, awards }=props

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg border-t-8 border-yellow-400">
      {/* Header: Name and Contact */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-lg text-gray-600">{careerObjective || "Your Job Title"}</p>
          <p className="text-gray-500 mt-2">📞 {contactInfo?.phone || "Phone Number"}</p>
          <p className="text-gray-500">📧 {contactInfo?.email || "email@example.com"}</p>
          {contactInfo?.website && (
            <p className="text-gray-500">
              🌐 <a href={contactInfo.website} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Website</a>
            </p>
          )}
          {contactInfo?.linkedin && (
            <p className="text-gray-500">
              🔗 <a href={contactInfo.linkedin} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">LinkedIn: {contactInfo.linkedin}</a>
            </p>
          )}
        </div>
        {contactInfo?.profileImage && (
          <div>
            <img src={contactInfo.profileImage} alt={`${name}'s Profile`} className="rounded-full w-20 h-20" />
          </div>
        )}
      </div>

      {/* Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-gray-700 mt-2">
          {careerObjective || "A dedicated and result-driven professional with expertise in your field. Experienced in working in dynamic environments and committed to delivering high-quality results."}
        </p>
      </section>

      {/* Skills */}
      {skillData && skillData.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            {skillData.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Work History</h2>
          {experience.map((exp) => (
            <div key={exp._id} className="mt-4">
              <h3 className="font-bold">{exp.jobTitle}</h3>
              <p className="text-gray-500">{exp.company} • {exp.duration}</p>
              <ul className="list-disc ml-5 mt-2 text-gray-700">
                {exp.responsibilities && exp.responsibilities.length > 0 ? (
                  exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))
                ) : (
                  <li>Description of responsibilities goes here.</li>
                )}
              </ul>
            </div>
          ))}
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Projects</h2>
          {projects.map((project, index) => (
            <div key={project._id || index} className="mt-4">
              <h3 className="font-bold">{project.title || `Project ${index + 1}`}</h3>
              <p className="text-gray-500">{project.description || "Project description goes here."}</p>
              {project.features && project.features.length > 0 && (
                <ul className="list-disc ml-5 mt-2 text-gray-700">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Education</h2>
          {education.map((edu) => (
            <div key={edu._id} className="mt-4">
              <h3 className="font-bold">{edu.degree}</h3>
              <p className="text-gray-500">{edu.institution} • {edu.startYear} - {edu.endYear}</p>
              <p className="text-gray-700 mt-2">{edu.description || "Education description goes here."}</p>
            </div>
          ))}
        </section>
      )}

      {/* Certificates */}
      {certificates && certificates.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Certificates</h2>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            {certificates.map(cert => (
              <li key={cert._id || cert.title}>
                {cert.title} by {cert.institution} ({cert.year})
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Awards */}
      {awards && awards.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Awards</h2>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            {awards.map(award => (
              <li key={award._id || award.title}>
                {award.title} - {award.organization} ({award.year})
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Languages */}
      {languages && languages.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold">Languages</h2>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Resume7;
