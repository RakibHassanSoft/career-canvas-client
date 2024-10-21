const Resume1 = (props) => {
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

  console.log(props?.props);

  // let skillData=
  return (
    <div className="w-full mx-auto p-8 bg-gray-50">
      {/* Resume Title */}
      <header className="flex justify-between items-center border-b-2 pb-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold">{personalInfo?.name}</h1>
          <h2 className="text-lg font-light text-gray-500">Web Developer</h2>
        </div>
      </header>

      {/* Contract Summary */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Contact Summary</h3>
        <p>Phone: {personalInfo?.phone}</p>
        <p>Email: {personalInfo?.email}</p>
        <p>
          Website: <a href={personalInfo?.website}>{personalInfo?.website}</a>
        </p>
      </section>

      {/* Career Objective */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Career Objective</h3>
        <p>{careerObjective}</p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Skills</h3>
        {skills?.length > 0 &&
          skills.map((item, index) => (
            <ul key={index} className="list-disc ml-4">
              <li>{item}</li>
            </ul>
          ))}
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
              {project.description || "Project description goes here."}
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
              <p className="text-gray-600">
                {edu.institution}, {edu.startDate} - {edu.endDate}
              </p>
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
              <p className="text-gray-600">
                {exp.company}, {exp.duration}
              </p>
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
            {certificates.map((cert) => (
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
