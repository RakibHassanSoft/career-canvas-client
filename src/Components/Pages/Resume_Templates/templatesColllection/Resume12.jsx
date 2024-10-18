


const Resume12 = (props) => {
  const {contactInfo, name,skillData,careerObjective,projects,education,experience,languages,certificates, awards }=props

// console.log(props)
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md p-8 flex flex-col md:flex-row">
      {/* Left Column */}
      <div className="md:w-1/2 pr-4">
        {/* Title and Contact */}
        <div className="flex items-center mb-6">
          {/* <img
            src={contactInfo?.profileImage || "default-profile.png"} // Use profile image from contactInfo or a default image
            alt="Profile"
            className="w-24 h-24 rounded-full shadow-md mr-4"
          /> */}
          <div>
            <h1 className="text-4xl font-bold">{name || "Your Name"}</h1>
            <h2 className="text-lg text-gray-600">
              {contactInfo?.title || "Your Profession"}
            </h2>
          </div>
        </div>
        <div className="mb-6">
          <p>📞 {contactInfo?.phone || "123-456-7890"}</p>
          <p>✉️ {contactInfo?.email || "email@example.com"}</p>
          <p>
            🌍{" "}
            <a
              href={contactInfo?.website || "#"}
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactInfo?.website || "yourwebsite.com"}
            </a>
          </p>
        </div>

        {/* Career Objective */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">
            Career Objective
          </h3>
          <p className="text-gray-700">
            {careerObjective || "Your career objective goes here."}
          </p>
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Skills</h3>
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

        {/* Languages */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">
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
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Awards</h3>
          {awards && awards.length > 0 ? (
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
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
          <h3 className="text-xl font-semibold text-orange-600 mb-2">
            Certificates
          </h3>
          {certificates && certificates.length > 0 ? (
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
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

        {/* Projects */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Projects</h3>
          {projects && projects?.length > 0 ? (
            projects?.map((project, index) => (
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
            <p className="text-gray-700">No projects data available.</p>
          )}
        </section>
      </div>

      {/* Partition */}
      <div className="w-px bg-gray-300 mx-4 hidden md:block"></div>

      {/* Right Column */}
      <div className="md:w-1/2 pl-4">
        {/* Summary */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Summary</h3>
          <p className="text-gray-700">
            {careerObjective ||
              "A dedicated and result-driven developer with a solid understanding of front-end and back-end development. Experienced in working in agile environments and using JavaScript, React, Node.js, and other modern technologies to build efficient and scalable applications."}
          </p>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Experience</h3>
          {experience && experience.length > 0 ? (
            experience.map((exp) => (
              <div key={exp._id} className="mb-4">
                <h4 className="text-lg font-bold">{exp.jobTitle}</h4>
                <p className="text-gray-600">
                  {exp.company} • {exp.duration}
                </p>
                {exp.description && (
                  <p className="text-gray-700 mt-2">{exp.description}</p>
                )}
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
            <p className="text-gray-700">No experience data available.</p>
          )}
        </section>

        {/* Education */}
        <section className="mb-6">
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Education</h3>
          {education && education.length > 0 ? (
            education.map((edu) => (
              <div key={edu._id} className="mb-4">
                <h4 className="text-lg font-bold">{edu.degree}</h4>
                <p className="text-gray-600">
                  {edu.institution} • {edu.startYear} - {edu.endYear}
                </p>
                {edu.description && (
                  <p className="text-gray-700 mt-2">{edu.description}</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-700">No education data available.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Resume12;
