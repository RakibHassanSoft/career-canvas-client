import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

const JobPosting = () => {
  // State for the job posting details
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    company: '',
    location: '',
    employmentType: '',
    salaryRange: '',
    remoteOption: '',
    experience: '',
    jobDescription: '',
    responsibilities: [''],
    requirements: [''],
    skills: [''],
    applySection: {
      callToAction: '',
      applyLinkText: '',
      applyLink: ''
    }
  });
// console.log(jobDetails)
  // Function to handle input change for non-array fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  // Function to handle input change for array fields
  const handleArrayChange = (e, index, field) => {
    const newArray = [...jobDetails[field]];
    newArray[index] = e.target.value;
    setJobDetails({ ...jobDetails, [field]: newArray });
  };

  // Function to add new fields in array sections
  const addField = (field) => {
    setJobDetails({ ...jobDetails, [field]: [...jobDetails[field], ''] });
  };

  // Function to remove a specific field from array sections
  const removeField = (index, field) => {
    const newArray = jobDetails[field].filter((_, i) => i !== index);
    setJobDetails({ ...jobDetails, [field]: newArray });
  };

  // Function to handle changes for applySection
  const handleApplySectionChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({
      ...jobDetails,
      applySection: { ...jobDetails.applySection, [name]: value }
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-10 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-gradient-to-r from-green-400 to-blue-500 mb-8 text-center">Create a Job Posting</h1>

      {/* Basic Job Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={jobDetails.jobTitle}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="Enter the job title"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
          <input
            type="text"
            name="company"
            value={jobDetails.company}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="Enter the company name"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={jobDetails.location}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="Location (e.g., Miami, FL)"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Employment Type</label>
          <input
            type="text"
            name="employmentType"
            value={jobDetails.employmentType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="e.g., Full-time, Part-time"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Salary Range</label>
          <input
            type="number"
            name="salaryRange"
            value={jobDetails.salaryRange}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="e.g., 75000"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Remote Option</label>
          <input
            type="text"
            name="remoteOption"
            value={jobDetails.remoteOption}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="e.g., Remote, On-site"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-2">Experience</label>
          <input
            type="text"
            name="experience"
            value={jobDetails.experience}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="e.g., 4+ years required"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-2">Job Description</label>
          <textarea
            name="jobDescription"
            value={jobDetails.jobDescription}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            rows="4"
            placeholder="Provide a detailed job description"
          ></textarea>
        </div>
      </div>

      {/* Responsibilities Section */}
      <div className="my-8">
        <label className="block text-gray-700 font-semibold mb-4 text-lg">Responsibilities</label>
        {jobDetails.responsibilities.map((responsibility, index) => (
          <div key={index} className="flex items-center mb-3">
            <input
              type="text"
              value={responsibility}
              onChange={(e) => handleArrayChange(e, index, 'responsibilities')}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
              placeholder="Enter responsibility"
            />
            <button
              onClick={() => addField('responsibilities')}
              className="ml-3 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none"
            >
              <FaPlus />
            </button>
            {jobDetails.responsibilities.length > 1 && (
              <button
                onClick={() => removeField(index, 'responsibilities')}
                className="ml-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
              >
                <FaTrash />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Requirements Section */}
      <div className="my-8">
        <label className="block text-gray-700 font-semibold mb-4 text-lg">Requirements</label>
        {jobDetails.requirements.map((requirement, index) => (
          <div key={index} className="flex items-center mb-3">
            <input
              type="text"
              value={requirement}
              onChange={(e) => handleArrayChange(e, index, 'requirements')}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
              placeholder="Enter requirement"
            />
            <button
              onClick={() => addField('requirements')}
              className="ml-3 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none"
            >
              <FaPlus />
            </button>
            {jobDetails.requirements.length > 1 && (
              <button
                onClick={() => removeField(index, 'requirements')}
                className="ml-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
              >
                <FaTrash />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="my-8">
        <label className="block text-gray-700 font-semibold mb-4 text-lg">Skills</label>
        {jobDetails.skills.map((skill, index) => (
          <div key={index} className="flex items-center mb-3">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleArrayChange(e, index, 'skills')}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
              placeholder="Enter skill"
            />
            <button
              onClick={() => addField('skills')}
              className="ml-3 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none"
            >
              <FaPlus />
            </button>
            {jobDetails.skills.length > 1 && (
              <button
                onClick={() => removeField(index, 'skills')}
                className="ml-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
              >
                <FaTrash />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Apply Section */}
      <div className="my-8">
        <h2 className="text-xl font-bold mb-6">Application Details</h2>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Call to Action</label>
          <input
            type="text"
            name="callToAction"
            value={jobDetails.applySection.callToAction}
            onChange={handleApplySectionChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="e.g., Administer the future with us!"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Apply Link Text</label>
          <input
            type="text"
            name="applyLinkText"
            value={jobDetails.applySection.applyLinkText}
            onChange={handleApplySectionChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="e.g., Apply Now"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">Apply Link</label>
          <input
            type="text"
            name="applyLink"
            value={jobDetails.applySection.applyLink}
            onChange={handleApplySectionChange}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500"
            placeholder="e.g., https://apply-link.com"
          />
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300">
        Post Job
      </button>
    </div>
  );
};

export default JobPosting;






// const JobPosting = () => {
//   return (
//     <div className="max-w-7xl mx-auto p-6 bg-gray-100 font-sans">
//       {/* Job Header */}
//       <header className="bg-gradient-to-r from-green-700 to-green-500 text-white p-10 rounded-xl shadow-lg text-center">
//         <h1 className="text-4xl font-bold">Full Stack Developer</h1>
//         <p className="mt-2 text-lg">Tech Innovators - San Francisco, CA</p>
//       </header>

//       {/* Job Details */}
//       <section className="flex flex-wrap justify-between bg-white p-8 mt-8 rounded-xl shadow-md space-y-4 md:space-y-0">
//         <div className="w-full md:w-1/4">
//           <h3 className="text-xl font-semibold text-green-600">Employment Type</h3>
//           <p className="text-gray-600 mt-2">Full-time</p>
//         </div>
//         <div className="w-full md:w-1/4">
//           <h3 className="text-xl font-semibold text-green-600">Salary</h3>
//           <p className="text-gray-600 mt-2">$80,000 - $120,000 per year</p>
//         </div>
//         <div className="w-full md:w-1/4">
//           <h3 className="text-xl font-semibold text-green-600">Remote</h3>
//           <p className="text-gray-600 mt-2">Fully Remote Available</p>
//         </div>
//         <div className="w-full md:w-1/4">
//           <h3 className="text-xl font-semibold text-green-600">Experience</h3>
//           <p className="text-gray-600 mt-2">3-5 years preferred</p>
//         </div>
//       </section>

//       {/* Job Description */}
//       <section className="bg-white p-10 mt-10 rounded-xl shadow-md">
//         <h2 className="text-3xl font-semibold text-green-700 mb-6">Job Description</h2>
//         <p className="text-gray-700 mb-4">
//           We are looking for a Full Stack Developer with experience in building high-performing, scalable, enterprise-grade applications. 
//           You will be responsible for the full software development life cycle, from concept and design to testing.
//         </p>

//         <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Responsibilities</h2>
//         <ul className="space-y-3">
//           {[
//             "Develop and maintain web applications using React and Node.js.",
//             "Design client-side and server-side architecture.",
//             "Ensure responsiveness and cross-platform optimization of applications.",
//             "Collaborate with the development team to create scalable software solutions."
//           ].map((item, index) => (
//             <li key={index} className="bg-green-600 text-white py-3 px-6 rounded-lg transform transition-transform duration-300 hover:translate-x-2">
//               {item}
//             </li>
//           ))}
//         </ul>

//         <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Requirements</h2>
//         <ul className="space-y-3">
//           {[
//             "Proven experience as a Full Stack Developer or similar role.",
//             "Experience developing desktop and mobile applications.",
//             "Familiarity with common stacks (MERN, MEAN).",
//             "Knowledge of front-end technologies (HTML, CSS, JavaScript, React).",
//             "Familiarity with databases (MySQL, MongoDB), web servers (Apache), and UI/UX design."
//           ].map((item, index) => (
//             <li key={index} className="bg-green-600 text-white py-3 px-6 rounded-lg transform transition-transform duration-300 hover:translate-x-2">
//               {item}
//             </li>
//           ))}
//         </ul>

//         {/* Skill Tags Section */}
//         <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Skills</h2>
//         <div className="flex flex-wrap gap-3">
//           {[
//             "JavaScript",
//             "React",
//             "Node.js",
//             "MongoDB",
//             "HTML & CSS",
//             "REST APIs"
//           ].map((skill, index) => (
//             <span key={index} className="inline-block bg-green-200 text-green-700 font-semibold py-2 px-4 rounded-full">
//               {skill}
//             </span>
//           ))}
//         </div>
//       </section>

//       {/* Apply Section */}
//       <section className="bg-green-700 text-white text-center py-10 mt-10 rounded-xl shadow-lg">
//         <p className="text-2xl mb-6">Ready to join our team?</p>
//         <a href="#" className="bg-white text-green-700 font-semibold py-3 px-8 rounded-full transition-colors hover:bg-green-500 hover:text-white">
//           Apply Now
//         </a>
//       </section>

//       {/* Footer */}
//       <footer className="text-center py-6 mt-8 bg-gray-100 text-gray-600">
//         <p>© 2024 Tech Innovators. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default JobPosting;