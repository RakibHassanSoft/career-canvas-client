


const Resume5 = (props) => {

  const {contactInfo, name,skillData,careerObjective,projects,education,experience,languages,certificates, awards }=props

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-md">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
          <p className="text-lg text-gray-600">{contactInfo?.title || "Web Developer"}</p>
          <p className="mt-2 text-gray-500">
            {contactInfo?.phone} — {contactInfo?.email} —{" "}
            <a href={contactInfo?.website} className="text-blue-500 underline">
              {contactInfo?.website}
            </a>
          </p>
        </div>
        {contactInfo?.profilePhoto && (
          <img
            className="h-24 w-24 rounded-full object-cover"
            src={contactInfo.profilePhoto} // Ensure this path is correct
            alt={`${name}'s Profile`}
          />
        )}
      </div>

      {/* Professional Summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
        <p className="mt-2 text-gray-700">
          {careerObjective || "A passionate professional with expertise in various domains, committed to delivering high-quality results."}
        </p>
      </div>

      {/* Skills */}
      {skillData && skillData.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
          <div className="flex flex-wrap mt-2">
            {skillData.map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 rounded-full px-4 py-1 m-1">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Professional Experience */}
      {experience && experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Professional Experience</h2>
          {experience.map((exp) => (
            <div key={exp._id} className="mt-4">
              <h3 className="font-bold">{exp.company} - {exp.jobTitle}</h3>
              <p className="text-gray-600 italic">{exp.duration} | {exp.location || "Location"}</p>
              <p className="text-gray-700 mt-2">{exp.description || "Job description goes here."}</p>
              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
          {projects.map((project, index) => (
            <div key={project._id} className="mt-4">
              <h3 className="font-bold">{project.title || `Project ${index + 1}`}</h3>
              <p className="text-gray-700 mt-2">{project.description || "Project description goes here."}</p>
              {project.features && project.features.length > 0 ? (
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <ul className="list-disc list-inside mt-2 text-gray-700">
                  <li>Feature 1 of the project</li>
                  <li>Feature 2 of the project</li>
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {education && education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Education</h2>
          {education.map((edu) => (
            <div key={edu._id} className="mt-4">
              <h3 className="font-bold">{edu.degree}</h3>
              <p className="text-gray-600 italic">{edu.institution} • {edu.startYear} - {edu.endYear}</p>
              <p className="text-gray-700 mt-2">{edu.description || "Education description goes here."}</p>
            </div>
          ))}
        </div>
      )}

      {/* Languages */}
      {languages && languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Languages</h2>
          <div className="flex flex-wrap mt-2">
            {languages.map((language, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 rounded-full px-4 py-1 m-1">
                {language}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Certifications */}
      {certificates && certificates.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Certifications</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            {certificates.map((cert) => (
              <li key={cert._id}>
                {cert.title} - {cert.institution} ({cert.year || "Year"})
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Awards */}
      {awards && awards.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Awards</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            {awards.map((award) => (
              <li key={award._id}>
                {award.title} - {award.organization} ({award.year || "Year"})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Resume5;
