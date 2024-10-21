import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../../Hooks/AxiosHooks/useAxiosPublic";
import { useNavigate, useLocation } from "react-router-dom"; // Add useLocation
import { useForm } from 'react-hook-form';
import { useEffect } from "react";

const ApplyJob = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const axiosCommon = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const location = useLocation(); // Get the job data from location

    // Fallback in case job data is not passed correctly
    const job = location.state?.job;

    useEffect(() => {
        if (!job) {
            // If job is not available, navigate back or show an error message
            toast.error("No job selected to apply for.");
            navigate("/job-section"); // Redirect to job section
        }
    }, [job, navigate]);

    const onSubmit = async (data) => {
        try {
            const applyData = {
                name: data.name,
                email: data.email,
                phone: data.number,
                details: data.message,
                userId: user.uid,
                jobTitle: job?.jobTitle,
                companyName: job?.company,
            };
            // Posting data to the server
            await axiosCommon.post('/api/applyJob', applyData);
            toast.success('Applied successfully!');
            reset();
            navigate('/job-section');
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="p-16 pt-28">
            <h1 className="text-2xl font-bold mb-4">Apply for Job: {job?.jobTitle}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={user.displayName}
                    className="block w-full mb-4 p-2 border"
                    {...register('name', { required: true })}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={user.email}
                    className="block w-full mb-4 p-2 border"
                    {...register('email', { required: true })}
                />
                <input
                    type="number"
                    placeholder="Your Phone Number"
                    className="block w-full mb-4 p-2 border"
                    {...register('number', { required: true })}
                />
                <textarea
                    placeholder="Why are you a good fit?"
                    className="block w-full mb-4 p-2 border"
                    rows="5"
                    {...register('message', { required: true })}
                ></textarea>
                <button type='submit'
                    className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 "
                >
                    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-20 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-indigo-600 transition duration-300 group-hover:text-black ease">
                        Apply Now
                    </span>
                </button>
            </form>
        </div>
    );
};

export default ApplyJob;
