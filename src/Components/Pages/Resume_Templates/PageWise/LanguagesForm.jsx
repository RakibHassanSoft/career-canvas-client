import { useState, useContext } from 'react';
import { FaRegLightbulb, FaCheckCircle } from 'react-icons/fa';
import { ImArrowLeft } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxiosPublic from '../../../../Hooks/AxiosHooks/useAxiosPublic';
import { FormContext } from '../../../Providers/FormContext';

const LanguagesForm = () => {
    const [formData, setFormData] = useState({ languages: '' });
    const { user, resumeId } = useContext(AuthContext); // Access userId and resumeId from context
    const { updateLanguages, submitFormData } = useContext(FormContext);
    const axiosPublic = useAxiosPublic();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { value } = e.target;
        setFormData({ languages: value });
        if (errors.languages) {
            setErrors({ ...errors, languages: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.languages) newErrors.languages = 'Languages are required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        } else {
            try {
                updateLanguages(formData.languages);
               const res=await  submitFormData()

                 console.log(res)
                // Change to your desired route

            } catch (error) {
                console.error('Error submitting languages:', error.response ? error.response.data : error.message);
                setErrors({ ...errors, submit: 'Failed to submit languages. Please try again.' });
            }
        }
    };

    const handleBack = () => {
        navigate('/resume-templates/education-form'); // Navigate back to the previous page
    };

    return (
        <div className="flex max-w-6xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
            {/* Form Section */}
            <div className="w-full p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                <Link onClick={handleBack}>
                    <ImArrowLeft />
                </Link>

                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Languages</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Languages (comma-separated)
                        </label>
                        <input
                            type="text"
                            name="languages"
                            value={formData.languages}
                            onChange={handleChange}
                            required
                            placeholder="e.g. English, Spanish"
                            className={`mt-1 block w-full border ${errors.languages ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                            aria-label="Languages"
                        />
                        {errors.languages && <p className="text-red-500 text-sm mt-1">{errors.languages}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-200 transform hover:scale-105"
                    >
                        Next
                    </button>
                </form>
                {errors.submit && <p className="text-red-500 text-sm mt-2">{errors.submit}</p>} {/* Error message for submission */}
            </div>

            {/* Tips Section */}
            <div className="w-1/2 p-6 ml-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                    <FaRegLightbulb className="text-green-600 mr-2" /> Tips for Filling Out the Form
                </h2>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <FaCheckCircle className="text-green-600 mr-2 mt-1" />
                        <p><strong>Languages:</strong> List the languages you speak, separated by commas.</p>
                    </div>
                    <div className="flex items-start">
                        <FaCheckCircle className="text-green-600 mr-2 mt-1" />
                        <p><strong>Proficiency:</strong> Indicate your proficiency level (e.g., Fluent, Intermediate).</p>
                    </div>
                </div>
                <p className="mt-4 text-gray-600">
                    Make sure all information is accurate to ensure proper validation and processing.
                </p>
            </div>
        </div>
    );
};

export default LanguagesForm;
