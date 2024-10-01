import React, { useState, useContext } from 'react';
import { FaRegLightbulb, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Providers/AuthProvider';
import AxiosPublic from '../Axios/AxiosPublic';

const SkillsForm = () => {
    const { user } = useContext(AuthContext); // Get user from AuthContext
    const navigate = useNavigate();
    const [skills, setSkills] = useState('');
    const [errors, setErrors] = useState('');
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e) => {
        setSkills(e.target.value);
        if (errors) {
            setErrors(''); // Clear error on input change
        }
    };

    const validate = () => {
        if (!skills) {
            return 'Skills are required.';
        }
        return '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validate();
        if (validationError) {
            setErrors(validationError);
            return;
        }

        if (!user) {
            setSubmitError('No user is currently logged in.');
            return;
        }

        try {
            const token = await user.getIdToken(); // Get token for authentication
            const dataToSend = {
                skills: skills.split(',').map(skill => skill.trim()), // Split and trim skills
                userId: user.uid, // Use the user ID from AuthContext
                templateId: '1', // Assuming you want to set it as '1'
            };

            // Send the POST request
            const response = await AxiosPublic.post('/skills', dataToSend, {
                headers: { Authorization: `Bearer ${token}` },
            });

            console.log('Skills submitted successfully:', response.data);
            navigate('/resume-templates/peronal-project'); // Navigate to the next page
        } catch (error) {
            console.error('Error submitting skills:', error);
            setSubmitError('Failed to submit skills. Please try again.');
        }
    };

    return (
        <div className="flex flex-row gap-2 max-w-6xl mx-auto p-6 bg-gradient-to-r from-green-200 to-green-400 rounded-lg shadow-lg">
            {/* Form Section */}
            <div className="w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Skills</h2>
                {submitError && <p className="text-red-500 mb-4">{submitError}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Enter Your Skills (comma-separated)
                        </label>
                        <input
                            type="text"
                            value={skills}
                            onChange={handleChange}
                            required
                            placeholder="JavaScript, React, Node.js, Express, MongoDB"
                            className={`mt-1 block w-full border ${errors ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200`}
                            aria-label="Skills"
                        />
                        {errors && <p className="text-red-500 text-sm mt-1">{errors}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
                    >
                        Next
                    </button>
                </form>
            </div>

            {/* Tips Section */}
            <div className="w-full p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
                <h2 className="text-2xl font-semibold mb-4 flex items-center text-green-700">
                    <FaRegLightbulb className="text-green-500 mr-2" /> Tips for Filling Out the Skills
                </h2>

                <div className="space-y-4">
                    <div className="flex items-start">
                        <FaCheckCircle className="text-green-500 mr-2 mt-1" />
                        <p><strong>Skills:</strong> List your skills separated by commas.</p>
                    </div>
                </div>
                <p className="mt-4 text-gray-700">
                    Ensure to include all relevant skills that showcase your expertise.
                </p>
            </div>
        </div>
    );
};

export default SkillsForm;
