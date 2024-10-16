/* eslint-disable react/no-unescaped-entities */
import { IoArrowBackOutline } from "react-icons/io5";
import { PiMapPinAreaFill } from "react-icons/pi";
import { TbReportMoney } from "react-icons/tb";
import hiringImage from "../../../../public/HiringConfirmed.png";
import { MdOutlineAddHomeWork, MdWorkHistory } from "react-icons/md";

const JobDetails = ({ toggleDetails, closeDetails, isOpen, job }) => {
  if (!job) {
    return null; // Early return if blog is undefined
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
    applySection,
  } = job;

  const formattedDate = new Date(date).toISOString().split('T')[0];

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
        className={`fixed top-0 right-0 z-40 w-64 p-4 overflow-y-auto transition-transform shadow-xl  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out bg-white shadow-lg z-40 max-w-5xl md:w-full h-full md:p-4`}
      >
        <button
          onClick={toggleDetails}
          className="text-gray-500 hover:text-gray-700 text-3xl"
        >
          <IoArrowBackOutline />
        </button>

        <div className="px-2 grid grid-cols-3 gap-2 md:mt-5">
          <div className=" col-span-2 space-y-3">
            <h2 className="text-2xl font-bold">
              {/* Full-Stack Developer with Expertise in Next.js 14+,
              MakerKit/ShipFast, and AI Integration */}
              {jobTitle}
            </h2>
            <div className="flex justify-between">
              <p>Posted Date: {formattedDate}</p>
              <div className="flex items-center gap-2">
                <PiMapPinAreaFill className="text-xl text-green-500" />
                <p>{location}</p>
              </div>
            </div>
            <hr />
            <h4 className="text-gray-500">{longDescription}</h4>

            {/* Responsibilities */}
            <div className="">
              <p>
                <strong>Responsibilities:</strong>
              </p>
              <ul className="list-disc ml-6 text-gray-500">
                <li>
                  {responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </li>
              </ul>
            </div>
            {/* Requirements */}
            <div className="">
              <p>
                <strong>Requirements:</strong>
              </p>
              <ul className="list-disc ml-6 text-gray-500">
                <li>
                  {requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </li>
              </ul>
            </div>

            {/* Project Details */}
            <div className="">
              <p>
                <strong>Experience:</strong>
              </p>
              <div className="text-gray-500">
                <p>{experience}</p>
                {/* <p>
                  Collaboration: Work alongside other developers and a project
                  manager.
                </p> */}
              </div>
            </div>
          </div>

          <div className=" rounded-lg row-span-2 p-4 border-l">
            <div className="mb-4 text-gray-500 shadow-lg rounded-lg p-3 bg-green-50">
              <p>
                You’ll need to attend exam & viva as per the company's rules and
                regulations. Make sure you understands all.
              </p>
              <a href="#" className="text-green-600 underline">
                Learn more
              </a>
            </div>

            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded w-full mb-2">
              <a target="_blank" href={applySection.applyLink}>Apply Now</a>
            </button>

            <button className="border-2 border-green-500 text-green-500 font-semibold py-2 px-4 rounded w-full mb-4">
              Save job
            </button>

            <div className="flex items-center mb-2">
              <span className="text-green-500 font-semibold mr-2">
                Flag as inappropriate
              </span>
            </div>

            <div className="text-gray-700 mb-4">
              <p>
                Response for the job: <span className="font-bold">20</span>
              </p>
              {/* <p>
                Available Connects: <span className="font-bold">0</span>
              </p> */}
            </div>

            {/* <div className="py-2 px-1">
              <h4 className="text-lg font-semibold mb-2">About the client</h4>
              <div className="flex items-center mb-2">
                <span className="text-green-600 mr-2">✔️</span>
                <span className="text-green-600">Payment method verified</span>
              </div>

              <div className="text-gray-700 mb-2">
                <p className="mb-1">⭐⭐☆☆☆ 2.0</p>
                <p className="text-sm">2.0 of 1 review</p>
                <p className="text-sm">Spain</p>
                <p className="text-sm">Madrid 11:02 PM</p>
                <p className="text-sm">4 jobs posted</p>
                <p className="text-sm">50% hire rate, 1 open job</p>
                <p className="text-sm">$209 total spent</p>
                <p className="text-sm">2 hires, 1 active</p>
                <p className="text-sm">$10.00 /hr avg hourly rate paid</p>
                <p className="text-sm">18 hours</p>
              </div>
            </div> */}
          </div>

          <div className="flex flex-col gap-8 rounded-lg col-span-2 drop-shadow-2xl drop-shadow-">
            <div className="flex justify-around pt-4">
              <div className="flex bg-green-50 shadow-xl hover:shadow-green-500 hover:bg-white rounded-lg md:p-6 items-center gap-3 transform transition-all duration-300 hover:scale-110">
                <TbReportMoney className="text-5xl text-green-500" />
                <div>
                  <p className="">{salaryRange}</p>
                  <p className="text-gray-500 text-sm ">Salary Range</p>
                </div>
              </div>

              <div className="flex bg-green-50 shadow-xl hover:shadow-green-500 hover:bg-white rounded-lg md:p-6 items-center gap-3 transform transition-all duration-300 hover:scale-110">
                <MdWorkHistory className="text-5xl text-green-500" />
                <div>
                  <p>{employmentType}</p>
                  <p className="text-gray-500 text-sm">Employment Type</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="flex bg-green-50 shadow-xl hover:shadow-green-500 hover:bg-white rounded-lg md:p-6 items-center gap-3
              transform transition-all duration-300 hover:scale-110"
              >
                <MdOutlineAddHomeWork className="text-5xl text-green-500" />
                <div className="">
                  <p>{remoteOption}</p>
                  <p className="text-gray-500 text-sm">Remote Option</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" col-span-2">
            <div className="grid grid-cols-2 items-center">
              <div className="space-y-2">
                <h1 className="font-semibold text-2xl">
                  Maybe The Last Apply!
                </h1>
                <p>Who knows maybe you will hire from this apply</p>
              </div>
              <div>
                <img src={hiringImage} alt="" />
              </div>
            </div>
          </div>
          {/* <div className="border-2 rounded-lg border-green-500 col-span-3">
            <div className="p-4 md:p-6 bg-white shadow-lg rounded-lg">
              <h2 className="text-xl font-semibold mb-4">
                Client &apos s recent history (2)
              </h2>
              <h3 className="text-md text-gray-600 mb-2">Jobs in progress</h3>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="text-lg font-medium mb-2">Test Render Shoes</h4>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500 mr-2">⭐⭐⭐⭐✰</span>
                  <span className="text-sm text-gray-500">2.0</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  It would be great if you could give a clear response.
                </p>
                <p className="text-sm text-gray-700">
                  To freelancer:{" "}
                  <span className="text-green-500">Hameed M.</span>{" "}
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>{" "}
                  <span className="text-gray-500">4.3 Good Job.</span>
                </p>
                <div className="mt-2 text-xs text-gray-400">
                  <p>Apr 2020 - Apr 2022</p>
                  <p>0 hrs</p>
                  <p>Billed: $20.00</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default JobDetails;
