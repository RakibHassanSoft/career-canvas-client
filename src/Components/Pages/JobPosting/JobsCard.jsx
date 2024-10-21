import { useState } from "react";
import JobDetails from "./JobDetails";

const JobsCard = ({ job }) => {
  const {
    jobTitle,
    jobDescription,
    skills,
    salaryRange,
    company,
    location,
    employmentType,
    remoteOption,
    experience,

  } = job;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSelectedJob(job); // Pass the correct blog data here when opening the details
    } else {
      setSelectedJob(null); // Clear the blog data when closing the details
    }
  };

  const closeDetails = () => {
    setIsOpen(false);
    setSelectedJob(null);
  };

  return (
    <>
      <div
        onClick={toggleDetails}
        className="border p-4 mb-4 rounded-lg shadow-lg hover:border-2 hover:border-green-500 cursor-pointer"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
          <h1 className="text-lg font-semibold">{jobTitle}</h1>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">{location}</p>
        </div>

        <p className="text-gray-700 text-sm md:text-base mb-2">
          {jobDescription}
        </p>

        <div className="flex flex-wrap space-x-2 mb-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-green-50 text-xs px-3 py-2 text-green-500 rounded-full mb-2"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-gray-500 text-sm">
          <p>
            {employmentType} - {remoteOption}
          </p>
          <p>
            Experience: { experience ?  experience + ' ' + 'Years' : "No Experience Needed"}
          </p>
          <p>
            Company: {company}
          </p>
          <p className="text-green-500 mt-2 md:mt-0">{salaryRange}</p>
        </div>
      </div>

      {isOpen && selectedJob && (
        <JobDetails
          toggleDetails={toggleDetails}
          closeDetails={closeDetails}
          isOpen={isOpen}
          job={selectedJob}
        />
      )}
    </>
  );
};

export default JobsCard;
