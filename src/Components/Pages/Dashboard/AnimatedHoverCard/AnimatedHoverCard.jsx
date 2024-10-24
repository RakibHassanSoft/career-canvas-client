import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosPublic from "../../../../Hooks/AxiosHooks/useAxiosPublic";

const AnimatedHoverCard = () => {
    const [savedJobs, setSavedJobs] = useState([]); // Initialize an empty array to store saved jobs
    const { user } = useContext(AuthContext);
    const axios = useAxiosPublic();

    useEffect(() => {
        const fetchSavedJobs = async () => {
            try {
                const response = await axios.get(`/api/getSavedJobs/${user.email}`);
                console.log(response.data.jobs);
                setSavedJobs(response.data.jobs);
            } catch (error) {
                console.error(error);
            }
        };

        // Call fetchSavedJobs once the component mounts
        if (user) {
            fetchSavedJobs();
        }
    }, [user, axios]);  // Include dependencies correctly
    console.log(savedJobs);

    return (
        <>
            {
                savedJobs.length > 0 ? (
                    <div className="overflow-x-auto">
                        <h2 className="text-3xl font-bold text-green-500">Saved Jobs</h2>
                        <table className="table table-zebra">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Job Name</th>
                                    <th>Company Name</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    savedJobs.map((job, index) => (
                                        <tr className="hover" key={index}>
                                            <th>{index + 1}</th>
                                            <td>{job.jobTitle}</td>
                                            <td>{job.company}</td>
                                            <td>{job.salaryRange}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>No saved jobs</p>
                )
            }
        </>
    );
};

export default AnimatedHoverCard;
