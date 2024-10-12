import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Providers/AuthProvider';
import getAuthToken from '../../../../Hooks/getToken';

const AddAdmin = () => {
    const [email, setEmail] = useState('');
    const { user } = useContext(AuthContext);

    // Handle form submission
    const handleAddAdmin = async (e) => {
        e.preventDefault();
    
        // Check if the email is valid (basic check)
        if (!/\S+@\S+\.\S+/.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
    
        try {
            const token = await getAuthToken();
    
            const response = await fetch("http://localhost:5000/api/users/role", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify({
                    email: email,
                    role: "admin",
                }),
            });
    
            const responseBody = await response.text(); // Get the response as text
            console.log("Response Body:", responseBody); // Log the raw response body
    
            if (!response.ok) {
                throw new Error("Failed to change user role");
            }
    
            const result = JSON.parse(responseBody); // Parse as JSON only if response is ok
            toast.success(`Successfully made ${email} an admin!`);
            console.log(result);
    
            // Reset the email field after successful submission
            setEmail('');
        } catch (error) {
            console.error("Error:", error);
            toast.error("Error making admin: " + error.message);
        }
    };
    

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Add Admin</h2>
                <form onSubmit={handleAddAdmin}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter admin email"
                        required
                        className="mb-4 p-2 border rounded w-full"
                    />
                    <div className="mb-4 text-gray-600">Your email: {user?.email}</div>
                    <button
                        type="submit"
                        className="w-full text-white bg-green-500 font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition"
                    >
                        Make Admin
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;
