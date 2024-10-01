import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Providers/AuthProvider';
import AxiosPublic from '../Axios/AxiosPublic';

const ProjectSubmissionForm = () => {
    const { user } = useContext(AuthContext); // Get user from AuthContext
    console.log('User:', user); // Check the user object

    const navigate = useNavigate();
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [error, setError] = useState('');
    const [submitError, setSubmitError] = useState('');

    const handleChangeName = (e) => {
        setProjectName(e.target.value);
        if (error) {
            setError(''); // Clear error on input change
        }
    };

    const handleChangeDescription = (e) => {
        setProjectDescription(e.target.value);
        if (error) {
            setError(''); // Clear error on input change
        }
    };

    const validate = () => {
        if (!projectName) {
            return 'Project name is required.';
        }
        if (!projectDescription) {
            return 'Project description is required.';
        }
        if (projectDescription.length < 20) {
            return 'Project description should be at least 20 characters.';
        }
        return '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        try {
            const token = await user.getIdToken(); // Get token for authentication
            console.log(token)
            const dataToSend = {
                projectName: projectName,
                projectDescription: projectDescription,
                userId: user.uid, // Use the user ID from AuthContext
            };

            // Send the POST request
            const response = await AxiosPublic.post('/projects', dataToSend, {
                headers: { Authorization: `Bearer ${token}` },
            });

            console.log('Project submitted:', response.data);
            navigate('/resume-templates/Education-form'); // Navigate to the projects page
        } catch (error) {
            console.error('Error submitting project:', error);
            setSubmitError('Failed to submit project. Please try again.');
        }
    };

    return (
        <div className="flex flex-col max-w-6xl mx-auto p-6 bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg shadow-lg">
            <div className="w-full p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Submit Your Project</h2>
                {submitError && <p className="text-red-500 mb-4">{submitError}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                        <input
                            type="text"
                            value={projectName}
                            onChange={handleChangeName}
                            required
                            placeholder="Enter your project name"
                            className={`mt-1 block w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200`}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                        <textarea
                            value={projectDescription}
                            onChange={handleChangeDescription}
                            required
                            placeholder="Write a brief description of your project."
                            className={`mt-1 block w-full border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200`}
                            rows="5"
                            aria-label="Project Description"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Submit Project
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProjectSubmissionForm;
