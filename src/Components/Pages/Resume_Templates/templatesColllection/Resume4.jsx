



const Resume4 = (props) => {
  const {personalInfo, skills,careerObjective,projects,education,experience,languages,certificates, awards }=props?.props
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-teal-600">{personalInfo?.name || "Your Name"}</h1>
        <p className="text-xl text-teal-500">Web Developer</p>
      </div>

      {/* Contact Information */}
      <div className="flex justify-between border-b pb-4 mb-6">
        <div>
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>Address: {personalInfo?.address || "Anytown, 12345"}</p>
          <p>Phone: {personalInfo?.phone || "555-555-122"}</p>
          <p>
            Email:{" "}
            <a href={`mailto:${personalInfo?.email || "john.doe@email.com"}`} className="text-teal-500">
              {personalInfo?.email || "john.doe@email.com"}
            </a>
          </p>
          <p>
            Website:{" "}
            <a href={personalInfo?.website || "https://www.yourwebsite.com"} className="text-teal-500">
              {personalInfo?.website || "www.yourwebsite.com"}
            </a>
          </p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul>
            {skills && skills.length > 0 ? (
              skills.map((skill, index) => (
                <li key={index}>
                  {skill} - <span className="text-green-500">Excellent</span>
                </li>
              ))
            ) : (
              <li>No skills data available.</li>
            )}
          </ul>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold text-teal-600">Professional Summary</h2>
        <p className="text-gray-600">
          {careerObjective || "Passionate web developer with extensive experience in building dynamic web applications and responsive websites. Looking for a challenging position where I can contribute to projects using modern web technologies and innovative solutions."}
        </p>
      </div>

      {/* Career Objective */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold text-teal-600">Career Objective</h2>
        <p className="text-gray-600">
          {careerObjective || "Seeking to leverage my extensive experience in sales and business development to secure a challenging position where I can contribute to continued growth and profitability while enhancing my skills and industry knowledge."}
        </p>
      </div>

      {/* Work Experience */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold text-teal-600">Work History</h2>
        {experience && experience.length > 0 ? (
          experience.map((exp) => (
            <div key={exp._id} className="mb-4">
              <h3 className="font-bold text-lg">{exp.jobTitle || "Sales Representative"}</h3>
              <p className="italic">
                {exp.company || "XYZ Corporation"} - {exp.duration || "January 2010 - Present"}
              </p>
              <ul className="list-disc ml-6">
                {exp.responsibilities && exp.responsibilities.length > 0 ? (
                  exp.responsibilities.map((resp, index) => <li key={index}>{resp}</li>)
                ) : (
                  <>
                    <li>Generate leads and develop new business opportunities</li>
                    <li>Consistently meet or exceed quarterly sales goals</li>
                    <li>Develop and maintain positive relationships with customers</li>
                  </>
                )}
              </ul>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No experience data available.</p>
        )}
      </div>

      {/* Projects */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold text-teal-600">Projects</h2>
        {projects && projects.length > 0 ? (
          projects.map((project, index) => (
            <div key={project._id} className="mb-4">
              <h3 className="font-bold text-lg">{project.title || `Project ${index + 1}`}</h3>
              <p className="text-gray-600">{project.description || "Project description goes here."}</p>
              {project.features && project.features.length > 0 ? (
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <ul className="list-disc ml-6 mt-2 text-gray-600">
                  <li>Feature 1 of the project</li>
                  <li>Feature 2 of the project</li>
                </ul>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-600">No projects data available.</p>
        )}
      </div>

      {/* Education Details */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold text-teal-600">Education</h2>
        {education && education.length > 0 ? (
          education.map((edu) => (
            <div key={edu._id} className="mb-4">
              <h3 className="font-bold text-lg">{edu.degree || "Bachelor of Science in Computer Science"}</h3>
              <p className="italic">
                {edu.institution || "Your University"} - {edu.startYear || "2010"} - {edu.endYear || "2014"}
              </p>
              <p className="text-gray-600 mt-2">{edu.description || "Education description goes here."}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No education data available.</p>
        )}
      </div>

      {/* Languages */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold text-teal-600">Languages</h2>
        {languages && languages.length > 0 ? (
          <ul className="list-disc ml-6 text-gray-600">
            {languages.map((language, index) => (
              <li key={index}>{language || "English (Native)"}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No languages data available.</p>
        )}
      </div>

      {/* Certificates */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold text-teal-600">Certificates</h2>
        {certificates && certificates.length > 0 ? (
          <ul className="list-disc ml-6 text-gray-600">
            {certificates.map((cert) => (
              <li key={cert._id}>
                {cert.title || "Certified React Developer"} by {cert.institution || "Udemy"}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No certificates available.</p>
        )}
      </div>

      {/* Awards */}
      <div className="mb-6 border-b pb-4">
        <h2 className="text-2xl font-semibold text-teal-600">Awards</h2>
        {awards && awards.length > 0 ? (
          <ul className="list-disc ml-6 text-gray-600">
            {awards.map((award) => (
              <li key={award._id}>
                {award.title || "Best Web Developer Award"} - {award.organization || "XYZ Organization"} ({award.year || "2021"})
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No awards data available.</p>
        )}
      </div>
    </div>
  );
};

export default Resume4;
