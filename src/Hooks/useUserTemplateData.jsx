import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './AxiosHooks/useAxiosPublic'; // Import your axios hook here
import { useContext } from 'react';
import { AuthContext } from '../Components/Providers/AuthProvider';

// Reusable hook for fetching user details
const useUserTemplateData = () => {
  const axiosPublic = useAxiosPublic(); // Use axiosPublic hook inside the custom hook
  const { user } = useContext(AuthContext); // useContext should be called within the hook
  const uid = user?.uid; // Extract uid from the user context

  // Function to fetch user data
  const fetchUserData = async () => {
    const response = await axiosPublic.get(`/api/formdata/${uid}`); // axiosPublic is used here
    // const response = await axiosPublic.get('person.json');
    return response.data;
  };

  // Return the query with proper uid check
  return useQuery(['userDetails', uid], fetchUserData, {
    enabled: !!uid, // Only run the query if uid is available
  });
};

export default useUserTemplateData;




