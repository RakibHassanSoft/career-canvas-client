const Resume11 = (props) => {
  console.log(props.props)
  const {
    personalInfo,
    
    skills,
    careerObjective,
    projects,
    education,
    experience,
    languages,
    certificates,
    awards,
  } = props?.props;
// console.log(personalInfo)
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-md p-8">
      {/* Header: Title and Contact */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <div>
          <h1 className="text-4xl font-bold text-purple-600">
            {personalInfo?.name || "Your Name"}
          </h1>
          <h2 className="text-lg text-gray-600">Senior Project Manager</h2>
        </div>
        <div className="text-right">
          <p>📞 {personalInfo?.phone || "(123) 456-7890"}</p>
          <p>✉️ {personalInfo?.email || "email@example.com"}</p>
          <p>
            🌍 {personalInfo?.location || "Minneapolis, MN"} |{" "}
            <a
              href={personalInfo?.website || "#"}
              className="text-blue-500 underline"
            >
              {personalInfo?.website || "LinkedIn"}
            </a>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-1">
          {/* Education */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            {education && education.length > 0 ? (
              education.map((edu) => (
                <div key={edu._id} className="mb-4">
                  <p className="font-bold">{edu.degree}</p>
                  <p className="text-gray-600">
                    {edu.institution} • {edu.startYear} - {edu.endYear}
                  </p>
                  <p className="text-gray-600 mt-1">{edu.description}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No education data available.</p>
            )}
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            {skills && skills.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No skills data available.</p>
            )}
          </section>

          {/* Certifications */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Certifications</h3>
            {certificates && certificates.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {certificates.map((cert) => (
                  <li key={cert._id}>
                    {cert.title} by {cert.institution}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No certifications available.</p>
            )}
          </section>

          {/* Awards */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Awards</h3>
            {awards && awards.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {awards.map((award) => (
                  <li key={award._id}>
                    {award.title} - {award.organization} ({award.year})
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No awards data available.</p>
            )}
          </section>
        </div>

        {/* Right Column */}
        <div className="col-span-2">
          {/* Career Objective */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">
              Career Objective
            </h3>
            <p className="text-gray-700">
              {careerObjective ||
                "Dynamic senior project manager with extensive experience seeking a challenging position where I can contribute to organizational growth and success."}
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">
              Work Experience
            </h3>
            {experience && experience.length > 0 ? (
              experience.map((exp) => (
                <div key={exp._id} className="mb-6">
                  <h4 className="text-lg font-bold">{exp.jobTitle}</h4>
                  <p className="text-gray-600">
                    {exp.company} • {exp.duration}
                  </p>
                  <p className="text-gray-700 mt-2">
                    {exp.description || "Job description goes here."}
                  </p>
                  {exp.responsibilities && exp.responsibilities.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 mt-2">
                      {exp.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-600">
                No work experience data available.
              </p>
            )}
          </section>

          {/* Projects */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">
              Projects
            </h3>
            {projects && projects.length > 0 ? (
              projects.map((project, index) => (
                <div key={project._id} className="mb-4">
                  <h4 className="text-lg font-bold">
                    {project.title || `Project ${index + 1}`}
                  </h4>
                  <p className="text-gray-700">
                    {project.description || "Project description goes here."}
                  </p>
                  {project.features && project.features.length > 0 ? (
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 mt-2">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 mt-2">
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

          {/* Languages */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">
              Languages
            </h3>
            {languages && languages.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
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

export default Resume11;
