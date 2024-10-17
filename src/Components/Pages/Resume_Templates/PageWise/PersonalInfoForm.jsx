import { useContext, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FormContext } from "../../../Providers/FormContext";
import { ImArrowLeft } from "react-icons/im";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosPublic from "../../../../Hooks/AxiosHooks/useAxiosPublic";

const PersonalInfoForm = () => {
  const navigate = useNavigate();
  const { user, resumeId } = useContext(AuthContext);
  const { updatePersonalInfo ,submitFormData} = useContext(FormContext);
  const axiosInstance = useAxiosPublic();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  
  const [errors, setErrors] = useState({});
  const [submissionError, setSubmissionError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!phone) newErrors.phone = 'Phone is required';
    if (!email) newErrors.email = 'Email is required';
    if (!website) newErrors.website = 'Website is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true); // Start loading
    setSubmissionError(""); // Clear previous errors

    try {
      // const requestData = {
      //   name,
      //   contact: {
      //     phone,
      //     email,
      //     website
      //   },
      //   userId: user.uid,
      //   templateId: resumeId,
      // };
      
      
      // const response = await axiosInstance.post("api/NameAndContact", requestData);
      
      // if (response.status === 201) {
      //   updatePersonalInfo({ name, contact: { phone, email, website } });
      //   setName("");
      //   setPhone("");
      //   setEmail("");
      //   setWebsite("");
      //   navigate('/resume-templates/career-objective-form');
      // }
      updatePersonalInfo({ name,  phone, email, website  });
     
      navigate('/resume-templates/career-objective-form');
    } catch (error) {
      setSubmissionError("Failed to submit the form. Please try again.");
      console.error("Error submitting form: ", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleBack = () => {
    navigate('/resume-templates/Resume_Templates');
  };

  return (
    <div className="flex flex-row gap-2 max-w-6xl mx-auto p-6 bg-gradient-to-r from-green-200 to-green-400 rounded-lg shadow-lg">
      <div className="w-1/2 p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
        <Link onClick={handleBack} aria-label="Go back">
          <ImArrowLeft />
        </Link>

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Personal Information</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="John Doe"
              className={`mt-1 block w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Phone Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="(123) 456-7890"
              className={`mt-1 block w-full border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="johndoe@example.com"
              className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Website Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
            <input
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              required
              placeholder="https://johndoe.com"
              className={`mt-1 block w-full border ${errors.website ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-green-500`}
            />
            {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website}</p>}
          </div>

          {submissionError && <p className="text-red-500 text-sm mt-1">{submissionError}</p>}

          <button
            type="submit"
            className={`w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 transition duration-200 transform hover:scale-105 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading} // Disable button during loading
          >
            {loading ? 'Submitting...' : 'Next'}
          </button>
        </form>
      </div>

      <div className="w-1/2 p-6 ml-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
          💡 Tips for Filling Out the Form
        </h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            <p><strong>Name:</strong> Enter your full name as it appears on official documents.</p>
          </div>
          <div className="flex items-start">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            <p><strong>Phone:</strong> Provide a valid phone number for contact purposes.</p>
          </div>
          <div className="flex items-start">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            <p><strong>Email:</strong> Use a professional email address.</p>
          </div>
          <div className="flex items-start">
            <FaCheckCircle className="text-green-500 mr-2 mt-1" />
            <p><strong>Website:</strong> Include a personal website or portfolio link if available.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
