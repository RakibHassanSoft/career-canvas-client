import React, { useContext, useState } from 'react';
import { FaRegLightbulb, FaCheckCircle, FaPhoneAlt, FaEnvelope, FaLink } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Components/Providers/AuthProvider';
import app from '../Components/Firebase/firebase.config';
import axios from 'axios';
import AxiosPublic from '../Axios/AxiosPublic';

const PersonalInfoForm = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        contact: {
            phone: '',
            email: '',
            website: '',
        },
        userId: '', // This can be filled from the user context
        templateId: '', // You may want to set this based on some logic
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.includes('contact.')) {
            const contactField = name.split('.')[1]; // Get the field (phone, email, website)
            setFormData((prev) => ({
                ...prev,
                contact: { ...prev.contact, [contactField]: value },
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }

        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.contact.phone) newErrors.phone = 'Phone is required';
        if (!formData.contact.email) newErrors.email = 'Email is required';
        if (!formData.contact.website) newErrors.website = 'Website is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        } else {
            if (!user) {
                console.error('No user is currently logged in.');
                return;
            }

            try {
                const token = await user.getIdToken();
                
                // Prepare the data to be sent
                const dataToSend = {
                    ...formData,
                    userId: user.uid, 
                    templateId:'1'// Assuming user ID is the UID from Auth context
                };
                /**
                 ////  Send data to your backend
                const response = await axios.post(
                    'http://localhost:5000/api/name/name-contact', // Adjust this URL as necessary
                    dataToSend,
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                 */

              
                const response = await AxiosPublic.post(
                    '/name/name-contact', // Use the relative URL
                    dataToSend,
                    { headers: { Authorization: `Bearer ${token}` } } // You can still include headers if needed
                );
                

                console.log('Response:', response.data);
                navigate("/resume-templates/career-objective-form"); // Navigate on success
            } catch (error) {
                console.error('Error getting token or sending data:', error);
                setErrors({ submit: 'Error submitting the form. Please try again.' });
            }
        }
    };

    return (
        <div className="flex flex-row gap-2 max-w-6xl mx-auto p-6 bg-gradient-to-r from-green-200 to-green-400 rounded-lg shadow-lg">
            {/* Form Section */}
            <div className="w-1/2 p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Personal Information</h2>
                <form onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                            className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                            type="tel"
                            name="contact.phone"
                            value={formData.contact.phone}
                            onChange={handleChange}
                            required
                            placeholder="(123) 456-7890"
                            className={`mt-1 block w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="contact.email"
                            value={formData.contact.email}
                            onChange={handleChange}
                            required
                            placeholder="your.email@example.com"
                            className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Website Field */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                        <input
                            type="url"
                            name="contact.website"
                            value={formData.contact.website}
                            onChange={handleChange}
                            required
                            placeholder="https://yourwebsite.com"
                            className={`mt-1 block w-full border ${errors.website ? 'border-red-500' : 'border-gray-300'
                                } rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
                        />
                        {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website}</p>}
                    </div>

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
                    <FaRegLightbulb className="text-green-600 mr-2" /> Tips for Filling Out the Form
                </h2>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <FaCheckCircle className="text-green-600 mr-2 mt-1" />
                        <p><strong>Name:</strong> Enter your full name as it appears on official documents.</p>
                    </div>
                    <div className="flex items-start">
                        <FaPhoneAlt className="text-green-600 mr-2 mt-1" />
                        <p><strong>Phone:</strong> Provide a valid phone number. Format: (123) 456-7890.</p>
                    </div>
                    <div className="flex items-start">
                        <FaEnvelope className="text-green-600 mr-2 mt-1" />
                        <p><strong>Email:</strong> Use a professional email address that you check regularly.</p>
                    </div>
                    <div className="flex items-start">
                        <FaLink className="text-green-600 mr-2 mt-1" />
                        <p><strong>Website:</strong> Include the full URL to your website.</p>
                    </div>
                </div>
                <p className="mt-4 text-gray-600">
                    Ensure all fields are completed accurately to avoid delays in processing your information.
                </p>
            </div>
        </div>
    );
};

export default PersonalInfoForm;
