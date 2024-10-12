import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../Components/Providers/AuthProvider';

const useAdmin = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user || !user.uid) {
        setLoading(false);
        return; 
      }

      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:5000/api/users/check-admin/${user.uid}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Assuming the API returns an object with an isAdmin property
        setIsAdmin(response.data.isAdmin);
      } catch (error) {
        console.error("Error checking admin status:", error);
        setError(error.response ? error.response.data.error : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    checkAdminStatus();
  }, [user]);

  return { isAdmin, loading, error };
};

export default useAdmin;
