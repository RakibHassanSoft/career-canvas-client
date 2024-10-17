////Not working here
import { useContext, useState } from 'react';
import { FaCheckCircle, FaGraduationCap } from 'react-icons/fa';
import { ImArrowLeft } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxiosPublic from '../../../../Hooks/AxiosHooks/useAxiosPublic';
import { FormContext } from '../../../Providers/FormContext';

const EducationForm = () => {
    const navigate = useNavigate();
    const { user, resumeId } = useContext(AuthContext);
    const { updateEducation } = useContext(FormContext);
    const axiosPublic = useAxiosPublic();
    const [educationList, setEducationList] = useState([
        { degree: '', institution: '', duration: '' }
    ]);
    const [errors, setErrors] = useState({});
    
    let templateId = resumeId; // Replace with actual template ID

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const newEducationList = [...educationList];
        newEducationList[index][name] = value;
        setEducationList(newEducationList);
        if (errors[index]?.[name]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [index]: { ...prevErrors[index], [name]: '' }
            }));
        }
    };

    const validate = () => {
        const newErrors = {};
        educationList.forEach((entry, index) => {
            const entryErrors = {};
            if (!entry.degree) entryErrors.degree = 'Degree is required';
            if (!entry.institution) entryErrors.institution = 'University is required';
            if (!entry.duration) entryErrors.duration = 'Duration is required';
            if (Object.keys(entryErrors).length) newErrors[index] = entryErrors;
        });
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        } else {
            try {
                updateEducation(educationList);
                // Prepare the data to send to the backend
                // const data = {
                //     userId :user.uid,
                //     templateId,
                //     education: educationList.map(entry => ({
                //         degree: entry.degree,
                //         institution: entry.institution,
                //         duration: entry.duration
                //     }))
                // };
                
                // // // Send the data to the backend
                // const response = await axiosPublic.post('/api/CreateEducation', data); // Adjust the URL as necessary
                // console.log('Education submitted successfully:', response.data);
                
                // Navigate to the next page
                navigate('/resume-templates/languages-form');
            } catch (error) {
                console.error('Error submitting education:', error);
                // Handle error appropriately (e.g., set error state to display a message)
            }
        }
    };

    const addEducationEntry = () => {
        setEducationList([...educationList, { degree: '', institution: '' }]);
    };

    const removeEducationEntry = (index) => {
        const newEducationList = educationList.filter((_, i) => i !== index);
        setEducationList(newEducationList);
    };
    
    const handleBack = () => {
        navigate('/resume-templates/peronal-project');
    }

    return (
        <div className="flex flex-row max-w-6xl mx-auto p-6 bg-gradient-to-r from-green-200 to-green-400 rounded-lg shadow-lg">
            {/* Form Section */}
            <div className="w-full p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                <Link onClick={handleBack}>
                    <ImArrowLeft />
                </Link>

                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Education Information</h2>
                <form onSubmit={handleSubmit}>
                    {educationList.map((entry, index) => (
                        <div key={index} className="mb-4 border p-4 rounded-md shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Entry {index + 1}</h3>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Your Degree
                            </label>
                            <input
                                type="text"
                                name="degree"
                                value={entry.degree}
                                onChange={(e) => handleChange(index, e)}
                                required
                                placeholder="e.g. Bachelor of Science"
                                className={`mt-1 block w-full border ${
                                    errors[index]?.degree ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                                aria-label="Your Degree"
                            />
                            {errors[index]?.degree && <p className="text-red-500 text-sm mt-1">{errors[index].degree}</p>}

                            <label className="block text-sm font-medium text-gray-700 mb-1 mt-3">
                                Institution Name
                            </label>
                            <input
                                type="text"
                                name="institution"
                                value={entry.institution}
                                onChange={(e) => handleChange(index, e)}
                                required
                                placeholder="e.g. Harvard University"
                                className={`mt-1 block w-full border ${
                                    errors[index]?.institution ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                                aria-label="Institution Name"
                            />
                            {errors[index]?.institution && <p className="text-red-500 text-sm mt-1">{errors[index].institution}</p>}

                            <label className="block text-sm font-medium text-gray-700 mb-1 mt-3">
                                Duration
                            </label>
                            <input
                                type="text"
                                name="duration"
                                value={entry.duration}
                                onChange={(e) => handleChange(index, e)}
                                required
                                placeholder="e.g. 2018 - 2022"
                                className={`mt-1 block w-full border ${
                                    errors[index]?.duration ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                                aria-label="Duration"
                            />
                            {errors[index]?.duration && <p className="text-red-500 text-sm mt-1">{errors[index].duration}</p>}

                            <button
                                type="button"
                                className="mt-3 text-red-500 hover:underline"
                                onClick={() => removeEducationEntry(index)}
                            >
                                Remove Entry
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addEducationEntry}
                        className="mb-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Add Another Entry
                    </button>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-200 transform hover:scale-105"
                    >
                        Next
                    </button>
                </form>
            </div>

            {/* Tips Section */}
            <div className="w-1/2 p-6 ml-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                    <FaGraduationCap className="text-green-600 mr-2" /> Tips for Filling Out the Form
                </h2>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <FaCheckCircle className="text-green-600 mr-2 mt-1" />
                        <p><strong>Your Degree:</strong> Enter the full name of your degree, e.g., Bachelor of Science.</p>
                    </div>
                    <div className="flex items-start">
                        <FaCheckCircle className="text-green-600 mr-2 mt-1" />
                        <p><strong>Institution Name:</strong> Provide the complete name of your institution.</p>
                    </div>
                    <div className="flex items-start">
                        <FaCheckCircle className="text-green-600 mr-2 mt-1" />
                        <p><strong>Duration:</strong> Specify the duration, e.g., 2018 - 2022.</p>
                    </div>
                </div>
                <p className="mt-4 text-gray-600">
                    Make sure all information is accurate to ensure proper validation and processing.
                </p>
            </div>
        </div>
    );
};

export default EducationForm;
