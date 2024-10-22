import { IoArrowBackOutline } from "react-icons/io5";
import { PiMapPinAreaFill } from "react-icons/pi";
import { TbReportMoney } from "react-icons/tb";
import hiringImage from "../../../../public/HiringConfirmed.png";
import { MdOutlineAddHomeWork, MdWorkHistory } from "react-icons/md";
import { Link } from "react-router-dom";

const JobDetails = ({ toggleDetails, closeDetails, isOpen, job }) => {
  if (!job) {
    return; // Early return if job is undefined
  }

  const {
    jobTitle,
    location,
    longDescription,
    responsibilities,
    requirements,
    salaryRange,
    employmentType,
    remoteOption,
    experience,
    date,
  } = job;

  const formattedDate = new Date(date).toISOString().split("T")[0];

  return (
    <>
      {isOpen && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={closeDetails}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 z-50 w-5/6 md:w-5/6 lg:w-2/3 xl:w-1/2 p-4 overflow-y-auto transition-transform shadow-xl 
        ${isOpen ? "translate-x-0" : "translate-x-full"} 
        transition-transform duration-300 ease-in-out bg-white shadow-lg h-full`}
      >
        <button
          onClick={toggleDetails}
          className="text-gray-500 hover:text-gray-700 text-3xl mb-4"
        >
          <IoArrowBackOutline />
        </button>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{jobTitle}</h2>

          <div className="flex justify-between text-sm text-gray-500">
            <p>Posted Date: {formattedDate}</p>
            <div className="flex items-center gap-2">
              <PiMapPinAreaFill className="text-xl text-green-500" />
              <p>{location}</p>
            </div>
          </div>

          <hr />

          <div className="text-gray-500 mb-4 break-words whitespace-pre-wrap">{longDescription}</div>

          {/* Responsibilities */}
          <div>
            <p className="font-bold">Responsibilities:</p>
            <ul className="list-disc ml-6 text-gray-500">
              {responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div>
            <p className="font-bold">Requirements:</p>
            <ul className="list-disc ml-6 text-gray-500">
              {requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <p className="font-bold">Experience:</p>
            <p className="text-gray-500">{experience}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4">
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded w-full">
              <Link state={{ job }} to="/applyJob">
                Apply Now
              </Link>
            </button>

            <button className="border-2 border-green-500 text-green-500 font-semibold py-2 px-4 rounded w-full">
              Save job
            </button>

            <div className="text-center">
              <p className="text-gray-500 font-semibold">
                Flag as inappropriate
              </p>
            </div>
          </div>

          {/* Salary and Employment Info */}
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg shadow-md">
              <TbReportMoney className="text-4xl text-green-500" />
              <div>
                <p className="font-bold">{salaryRange}</p>
                <p className="text-gray-500 text-sm">Salary Range</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg shadow-md">
              <MdWorkHistory className="text-4xl text-green-500" />
              <div>
                <p className="font-bold">{employmentType}</p>
                <p className="text-gray-500 text-sm">Employment Type</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-green-50 p-4 rounded-lg shadow-md">
            <MdOutlineAddHomeWork className="text-4xl text-green-500" />
            <div>
              <p className="font-bold">{remoteOption}</p>
              <p className="text-gray-500 text-sm">Remote Option</p>
            </div>
          </div>

          {/* Hiring Image Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 mt-8">
            <div className="space-y-2">
              <h1 className="font-semibold text-2xl">Maybe The Last Apply!</h1>
              <p>Who knows, maybe you'll get hired from this application.</p>
            </div>
            <div>
              <img src={hiringImage} alt="Hiring Confirmed" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
