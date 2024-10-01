import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Providers/AuthProvider';
import AxiosPublic from '../Axios/AxiosPublic';

const EducationForm = () => {
    const { user } = useContext(AuthContext); // Get user from AuthContext
    const navigate = useNavigate();
    const [degree, setDegree] = useState('');
    const [institution, setInstitution] = useState('');
    const [year, setYear] = useState('');
    const [error, setError] = useState('');
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'degree') setDegree(value);
        if (name === 'institution') setInstitution(value);
        if (name === 'year') setYear(value);

        if (error) {
            setError(''); // Clear error on input change
        }
    };

    const validate = () => {
        if (!degree || !institution || !year) {
            return 'All fields are required.';
        }
        if (year.length !== 4 || isNaN(year)) {
            return 'Year must be a valid 4-digit number.';
        }
        return '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validate();
        if (validationError) {
            setError(validationError);
            return;
        }

        if (!user) {
            setSubmitError('No user is currently logged in.');
            return;
        }

        try {
            const token = await user.getIdToken(); // Get token for authentication
            const dataToSend = {
                degree,
                institution,
                year,
                userId: user.uid, // Use the user ID from AuthContext
                templateId: '1', // Set template ID as needed
            };

            // Send the POST request
            const response = await AxiosPublic.post('/education/CreateEducation', dataToSend, {
                headers: { Authorization: `Bearer ${token}` },
            });

            console.log('Education submitted:', response.data);
            navigate('/resume-templates/skills-form'); // Navigate to Skills Form page
        } catch (error) {
            console.error('Error submitting education:', error);
            setSubmitError('Failed to submit education. Please try again.');
        }
    };

    return (
        <div className="flex flex-row gap-2 max-w-6xl mx-auto p-6 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg shadow-lg">
            {/* Form Section */}
            <div className="w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Education</h2>
                {submitError && <p className="text-red-500 mb-4">{submitError}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                        <input
                            type="text"
                            name="degree"
                            value={degree}
                            onChange={handleChange}
                            required
                            placeholder="Enter your degree (e.g., B.Sc. in Computer Science)"
                            className={`mt-1 block w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200`}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                        <input
                            type="text"
                            name="institution"
                            value={institution}
                            onChange={handleChange}
                            required
                            placeholder="Enter the institution name"
                            className={`mt-1 block w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200`}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Year of Graduation</label>
                        <input
                            type="text"
                            name="year"
                            value={year}
                            onChange={handleChange}
                            required
                            placeholder="Enter year of graduation (e.g., 2024)"
                            className={`mt-1 block w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200`}
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Tips Section */}
            <div className="w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
                    <span className="text-blue-500 mr-2">💡</span> Tips for Listing Your Education
                </h2>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">✅</span>
                        <p><strong>Be Accurate:</strong> Ensure your degree and institution are correctly listed.</p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">✅</span>
                        <p><strong>Include Relevant Details:</strong> Mention any honors or specializations.</p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">✅</span>
                        <p><strong>Be Consistent:</strong> Use the same format for all entries.</p>
                    </div>
                    <div className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">✅</span>
                        <p><strong>Keep it Updated:</strong> Add new qualifications as you complete them.</p>
                    </div>
                </div>
                <p className="mt-4">
                    Tailor your education section to match the job requirements for a better impact.
                </p>
            </div>
        </div>
    );
};

export default EducationForm;
