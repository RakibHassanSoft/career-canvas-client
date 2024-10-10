const ResumeMe = () => {
    // Demo data
    const contactInfo = {
      phone: '123-456-7890',
      email: 'example@example.com',
      website: 'https://www.example.com'
    };
    
    const name = 'John Doe';
  
    const skillData = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];
  
    const careerObjective = 'A passionate web developer with experience in building dynamic web applications.';
  
    const projects = [
      {
        _id: '1',
        title: 'Portfolio Website',
        description: 'A personal portfolio to showcase my work.',
        features: ['Responsive Design', 'User-friendly Interface']
      },
      {
        _id: '2',
        title: 'E-Commerce Application',
        description: 'An online store for various products.',
        features: ['Shopping Cart', 'Payment Gateway Integration']
      }
    ];
  
    const education = [
      {
        _id: '1',
        degree: 'Bachelor of Science in Computer Science',
        institution: 'XYZ University',
        startDate: '2016',
        endDate: '2020'
      }
    ];
  
    const experience = [
      {
        _id: '1',
        jobTitle: 'Frontend Developer',
        company: 'ABC Company',
        duration: '2020 - Present',
        responsibilities: [
          'Developed user-friendly web interfaces',
          'Collaborated with designers and backend developers'
        ]
      }
    ];
  
    const languages = ['English', 'Spanish'];
  
    const certificates = [
      {
        _id: '1',
        title: 'Certified JavaScript Developer',
        institution: 'Code Academy'
      }
    ];
  
    const awards = [
      {
        _id: '1',
        title: 'Employee of the Month',
        organization: 'ABC Company',
        year: '2021'
      }
    ];
  
    return (
      <div className="w-full mx-auto p-8 bg-gray-50">
        {/* Resume Title */}
        <header className="flex justify-between items-center border-b-2 pb-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold">{name}</h1>
            <h2 className="text-lg font-light text-gray-500">Web Developer</h2>
          </div>
        </header>
  
        {/* Contact Summary */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Contact Summary</h3>
          <p>Phone: {contactInfo.phone}</p>
          <p>Email: {contactInfo.email}</p>
          <p>Website: <a href={contactInfo.website} target="_blank" rel="noopener noreferrer">{contactInfo.website}</a></p>
        </section>
  
        {/* Career Objective */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Career Objective</h3>
          <p>{careerObjective}</p>
        </section>
  
        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Skills</h3>
          {skillData.map((item, index) => (
            <ul key={index} className="list-disc ml-4">
              <li>{item}</li>
            </ul>
          ))}
        </section>
  
        {/* Projects */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Projects</h3>
          {projects.map((project, index) => (
            <div key={project._id} className="mb-4">
              <h4 className="text-xl font-bold">Project {index + 1}: {project.title}</h4>
              <p className="text-gray-600">{project.description}</p>
              <ul className="list-disc ml-4 mt-2">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
  
        {/* Education Details */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Education</h3>
          {education.map((edu) => (
            <div key={edu._id} className="mb-4">
              <h4 className="text-xl font-bold">{edu.degree}</h4>
              <p className="text-gray-600">{edu.institution}, {edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </section>
  
        {/* Languages */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Languages</h3>
          <ul className="list-disc ml-4">
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </section>
  
        {/* Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Experience</h3>
          {experience.map((exp) => (
            <div key={exp._id} className="mb-6">
              <h4 className="text-xl font-bold">{exp.jobTitle}</h4>
              <p className="text-gray-600">{exp.company}, {exp.duration}</p>
              <ul className="list-disc ml-4 mt-2">
                {exp.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
  
        {/* Certificates */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Certificates</h3>
          <ul className="list-disc ml-4">
            {certificates.map(cert => (
              <li key={cert._id}>
                {cert.title} by {cert.institution}
              </li>
            ))}
          </ul>
        </section>
  
        {/* Awards */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Awards</h3>
          <ul className="list-disc ml-4">
            {awards.map((award) => (
              <li key={award._id}>
                {award.title} - {award.organization} ({award.year})
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  };
  
  export default ResumeMe;
  