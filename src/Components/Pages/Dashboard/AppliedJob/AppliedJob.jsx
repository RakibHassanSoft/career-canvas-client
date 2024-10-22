import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../../Hooks/AxiosHooks/useAxiosPublic";
const AppliedJob = () => {
    const axios = useAxiosPublic()
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get('/api/job/appliedJob')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, [axios]);

    console.log(data)

    const handleApprove = () =>{
        toast.success("Application Approved Successfully");
        // Update the data state here
    }
    const handleReject = () =>{
        toast.success("Application Reject Successfully");
        // Update the data state here
    }


    return (
        <div className="bg-white lg:w-auto p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">All Applicants</h3>

            <div className="">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-gray-600">
                                <th className="py-2 pr-10 lg:pr-0 text-left">#</th>
                                <th className="py-2 pr-10 lg:pr-0 text-left">Applicant Name</th>
                                <th className="py-2 pr-10 lg:pr-0 text-left">JOb Title</th>
                                <th className="py-2 pr-10 lg:pr-0 text-left">Message</th>
                                <th className="py-2 pr-10 lg:pr-0 text-left">applicationDate</th>
                                <th className="py-2 pr-10 lg:pr-0 text-left">Action</th>
                            </tr> 
                        </thead>
                        <tbody>
                            {data?.map((data, index) => (
                                <tr key={data._id} className="border-t text-gray-800">
                                    <td className="py-2 pr-10 lg:pr-0">{index + 1}</td>
                                    <td className="py-2 pr-10 lg:pr-0">{data.name}</td>
                                    <td className="py-2 pr-10 lg:pr-0">{data.jobTitle}</td>
                                    <td className="py-2 pr-10 lg:pr-0">{data.details}</td>
                                    <td className="py-2 pr-10 lg:pr-0">{data.applicationDate}</td>
                                    <td className="space-x-1">
                                        <button
                                            onClick={() => handleApprove(data)}
                                            disabled={data.status === 'active'}
                                            className={`p-2 rounded-lg ${data.status === 'approve' ? 'bg-green-500' : 'bg-red-500'} ${data.status === 'approve' ? 'cursor-not-allowed' : ''}`}>
                                            {data.status === 'approve' ? 'Approved' : 'Approve'}
                                        </button>
                                        <button
                                            onClick={() => handleReject(data)}
                                            disabled={data.status === 'active'}
                                            className={`p-2 rounded-lg ${data.status === 'reject' ? 'bg-red-500' : 'bg-purple-500'} ${data.status === 'approve' ? 'cursor-not-allowed' : ''}`}>
                                            {data.status === 'reject' ? 'Reject' : 'Approve'}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AppliedJob;