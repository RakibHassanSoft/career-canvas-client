


const Resume8 = (props) => {
  const {contactInfo, name,skillData,careerObjective,projects,education,experience,languages,certificates, awards }=props

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg border border-gray-300">
      {/* Header: Name and Contact */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div>
          <h1 className="text-5xl font-bold text-orange-600 mb-2">{name}</h1>
          <p className="text-lg font-medium text-gray-600">Web Developer</p>
        </div>
        <div className="text-right">
          <p className="text-gray-600">📞 {contactInfo?.phone}</p>
          <p className="text-gray-600">📧 {contactInfo?.email}</p>
          <p className="text-gray-600">📍 {contactInfo?.location}</p>
          <p className="text-gray-600">💼 @{contactInfo?.linkedin}</p>
        </div>
      </div>

      {/* Career Objective */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-orange-600 mb-4">Career Objective</h2>
        <p className="text-gray-700 mt-2">
          {careerObjective || "Your resume objective is a focused 2-3 sentence statement that demonstrates your interest and candidacy for the position you hope to land."}
        </p>
      </section>

      {/* Main Content: Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Skills, Education, Awards */}
        <div>
          {/* Education */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">Education</h2>
            {education && education.length > 0 ? (
              <ul className="mt-2 text-gray-700 space-y-4">
                {education.map((edu) => (
                  <li key={edu._id}>
                    <p className="font-semibold">{edu.degree} | {edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.startYear} - {edu.endYear}</p>
                    <p className="text-gray-600 mt-1">{edu.description}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No education data available.</p>
            )}
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">Skills</h2>
            {skillData && skillData.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {skillData.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No skills data available.</p>
            )}
          </section>

          {/* Awards */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">Awards</h2>
            {awards && awards.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {awards.map((award) => (
                  <li key={award._id}>
                    <span className="font-semibold">{award.title}</span> - {award.organization} ({award.year})
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No awards data available.</p>
            )}
          </section>
        </div>

        {/* Right Column: Experience, Projects, Certificates, Languages */}
        <div>
          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">Experience</h2>
            {experience && experience.length > 0 ? (
              experience.map((exp) => (
                <div key={exp._id} className="mb-6">
                  <h3 className="font-bold text-lg">{exp.jobTitle}</h3>
                  <p className="text-gray-500">{exp.company} • {exp.duration}</p>
                  <p className="text-gray-600 mt-2">{exp.description || "Job description goes here."}</p>
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      {exp.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-600">No experience data available.</p>
            )}
          </section>

          {/* Projects */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">Projects</h2>
            {projects && projects.length > 0 ? (
              projects.map((project, index) => (
                <div key={project._id} className="mb-6">
                  <h3 className="font-bold text-lg">{project.title || `Project ${index + 1}`}</h3>
                  <p className="text-gray-500">{project.duration || "Duration"}</p>
                  <p className="text-gray-600 mt-2">{project.description || "Project description goes here."}</p>
                  {project.features && project.features.length > 0 ? (
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                      <li>Feature 1 of the project</li>
                      <li>Feature 2 of the project</li>
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-600">No projects data available.</p>
            )}
          </section>

          {/* Certificates */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">Certificates</h2>
            {certificates && certificates.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {certificates.map(cert => (
                  <li key={cert._id}>
                    <span className="font-semibold">{cert.title}</span> by {cert.institution}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No certificates available.</p>
            )}
          </section>

          {/* Languages */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-orange-600 mb-4">Languages</h2>
            {languages && languages.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No languages data available.</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume8;
