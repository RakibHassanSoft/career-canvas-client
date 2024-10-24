import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import useAxiosPublic from '../Hooks/AxiosHooks/useAxiosPublic';
import { Link } from 'react-router-dom';

const JobRecom = () => {
  const [jobs, setJobs] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    // Fetch jobs from the backend
    const fetchJobs = async () => {
      try {
        const response = await axiosPublic.get(`/api/getJobs`);
        setJobs(response?.data?.jobs); // Update state with job data
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, [axiosPublic]);

  return (
    <div className="job-recom-container mx-auto py-10 px-4 max-w-screen-lg">
       <h1 className='text-4xl text-center text-green-400 font-serif'>Recomended Jobs</h1>
      {jobs?.length > 0 ? (
        <Swiper
          slidesPerView={3} // Default: 3 slides visible on large screens
          spaceBetween={30} // Spacing between cards
          slidesPerGroup={1} // Slide one card at a time
          loop={true} // Enable continuous loop mode
          autoplay={{
            delay: 3000, // 3-second delay for autoplay
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1, // 1 slide for small screens
              spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2, // 2 slides for medium screens (tablets)
              spaceBetween: 20,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3, // 3 slides for larger screens
              spaceBetween: 30,
            },
          }}
        >
          {jobs.map((job) => (
            <SwiperSlide key={job._id}>
              <div className="job-card bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
                <h3 className="job-title text-2xl font-semibold text-gray-800 mb-2">{job.jobTitle}</h3>
                <p className="job-company text-lg text-gray-600 mb-1">{job.company}</p>
                <p className="job-location text-sm text-gray-500 mb-4">{job.location}</p>
                <p className="job-type text-sm text-green-600 mb-2">{`Type: ${job.applySection.employmentType || 'N/A'}`}</p>
                <Link
                  to={`/job-section`}
                  className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
                >
                  View Job
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-center text-gray-500">No jobs found.</p>
      )}
    </div>
  );
};

export default JobRecom;
