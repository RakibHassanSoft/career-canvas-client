
//// has big probelm


import { useContext, useState } from 'react';
import { ImArrowLeft } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxiosPublic from '../../../../Hooks/AxiosHooks/useAxiosPublic';
import { AuthContext } from '../../../Providers/AuthProvider';

const ProjectsForm = () => {
    const navigate = useNavigate();
    const {user,resumeId} = useContext(AuthContext);
    const axiosPublic =useAxiosPublic()
    const [projects, setProjects] = useState([
        {
            title: '',
            description: '',
        },
    ]);

    const handleChange = (index, e) => {
        const { name, value } = e.target;
        const updatedProjects = [...projects];
        updatedProjects[index][name] = value;
        setProjects(updatedProjects);
    };

    const handleAddProject = () => {
        setProjects([...projects, { title: '', description: '' }]);
    };

    const handleRemoveProject = (index) => {
        const updatedProjects = projects.filter((_, i) => i !== index);
        setProjects(updatedProjects);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Projects submitted:', projects);

        // Prepare the data for submission according to your schema
        const requestData = {
            userId: user.uid, // Replace with the actual user ID
            templateId: resumeId, // Replace with the actual template ID
            projects: projects.map((project) => ({
                title: project.title,
                description: project.description,
            })),
        };

        try {
            // Submit the data to your API using Axios
            const response = await axiosPublic.post('/api/projects', requestData);
            console.log('Success:', response.data);
            navigate('/resume-templates/Education-form'); // Navigate after successful submission
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSkip = () => {
        navigate('/resume-templates/education-form');  // Change this to your desired navigation path for skipping
    };

    const handleBack = () => {
        navigate('/resume-templates/skills-form');
    };

    return (
        <div className="flex flex-col max-w-6xl mx-auto p-6 bg-gradient-to-r from-green-200 to-green-400 rounded-lg shadow-lg">
            <div className="w-full p-6 bg-white rounded-lg shadow-md">
                <Link onClick={handleBack}>
                    <ImArrowLeft />
                </Link>

                <h2 className="text-3xl font-bold mb-6 text-center text-green-700">Projects</h2>

                {/* Tips Section */}
                <div className="mb-6 p-4 border-l-4 border-green-600 bg-green-50 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800">Tips:</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Provide a clear and descriptive project name.</li>
                        <li>Highlight the top features that make your project unique.</li>
                        <li>List the technologies used to build your project.</li>
                        <li>Include GitHub and live links to showcase your work.</li>
                    </ul>
                </div>

                <form onSubmit={handleSubmit}>
                    {projects.map((project, index) => (
                        <div key={index} className="mb-6 p-6 border border-gray-300 rounded-lg shadow-sm bg-white transition-transform hover:scale-105">
                            <h3 className="text-2xl font-semibold mb-2 text-gray-800">Project {index + 1}</h3>
                            <button
                                type="button"
                                className="text-red-500 hover:text-red-600 mb-2"
                                onClick={() => handleRemoveProject(index)}
                            >
                                Remove Project
                            </button>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                                <input
                                    type="text"
                                    name="title" // Updated name attribute
                                    value={project.title}
                                    onChange={(e) => handleChange(index, e)}
                                    placeholder="Enter project name"
                                    className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    name="description" // Updated name attribute
                                    value={project.description}
                                    onChange={(e) => handleChange(index, e)}
                                    placeholder="Enter project description"
                                    className="block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-200"
                                    rows="3"
                                />
                            </div>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition mb-4"
                        onClick={handleAddProject}
                    >
                        Add Another Project
                    </button>
                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="w-full bg-gray-300 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-400 transition mr-2"
                            onClick={handleSkip}
                        >
                            Skip
                        </button>
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition"
                        >
                            Submit Projects
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProjectsForm;
