
const JobPosting = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-100 font-sans">
      {/* Job Header */}
      <header className="bg-gradient-to-r from-green-700 to-green-500 text-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold">Full Stack Developer</h1>
        <p className="mt-2 text-lg">Tech Innovators - San Francisco, CA</p>
      </header>

      {/* Job Details */}
      <section className="flex flex-wrap justify-between bg-white p-8 mt-8 rounded-xl shadow-md space-y-4 md:space-y-0">
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold text-green-600">Employment Type</h3>
          <p className="text-gray-600 mt-2">Full-time</p>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold text-green-600">Salary</h3>
          <p className="text-gray-600 mt-2">$80,000 - $120,000 per year</p>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold text-green-600">Remote</h3>
          <p className="text-gray-600 mt-2">Fully Remote Available</p>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-xl font-semibold text-green-600">Experience</h3>
          <p className="text-gray-600 mt-2">3-5 years preferred</p>
        </div>
      </section>

      {/* Job Description */}
      <section className="bg-white p-10 mt-10 rounded-xl shadow-md">
        <h2 className="text-3xl font-semibold text-green-700 mb-6">Job Description</h2>
        <p className="text-gray-700 mb-4">
          We are looking for a Full Stack Developer with experience in building high-performing, scalable, enterprise-grade applications. 
          You will be responsible for the full software development life cycle, from concept and design to testing.
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Responsibilities</h2>
        <ul className="space-y-3">
          {[
            "Develop and maintain web applications using React and Node.js.",
            "Design client-side and server-side architecture.",
            "Ensure responsiveness and cross-platform optimization of applications.",
            "Collaborate with the development team to create scalable software solutions."
          ].map((item, index) => (
            <li key={index} className="bg-green-600 text-white py-3 px-6 rounded-lg transform transition-transform duration-300 hover:translate-x-2">
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Requirements</h2>
        <ul className="space-y-3">
          {[
            "Proven experience as a Full Stack Developer or similar role.",
            "Experience developing desktop and mobile applications.",
            "Familiarity with common stacks (MERN, MEAN).",
            "Knowledge of front-end technologies (HTML, CSS, JavaScript, React).",
            "Familiarity with databases (MySQL, MongoDB), web servers (Apache), and UI/UX design."
          ].map((item, index) => (
            <li key={index} className="bg-green-600 text-white py-3 px-6 rounded-lg transform transition-transform duration-300 hover:translate-x-2">
              {item}
            </li>
          ))}
        </ul>

        {/* Skill Tags Section */}
        <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "JavaScript",
            "React",
            "Node.js",
            "MongoDB",
            "HTML & CSS",
            "REST APIs"
          ].map((skill, index) => (
            <span key={index} className="inline-block bg-green-200 text-green-700 font-semibold py-2 px-4 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Apply Section */}
      <section className="bg-green-700 text-white text-center py-10 mt-10 rounded-xl shadow-lg">
        <p className="text-2xl mb-6">Ready to join our team?</p>
        <a href="#" className="bg-white text-green-700 font-semibold py-3 px-8 rounded-full transition-colors hover:bg-green-500 hover:text-white">
          Apply Now
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 mt-8 bg-gray-100 text-gray-600">
        <p>© 2024 Tech Innovators. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default JobPosting;