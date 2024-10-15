import { auth } from "../Components/Firebase/firebase.config";

// Function to get the current user's authentication token
const getAuthToken = async () => {
  try {
    const user = auth.currentUser; // Get the currently logged-in user
    if (user) {
      const token = await user.getIdToken(); // Get the ID token for the user
      return token;
    } else {
      throw new Error("No user is logged in");
    }
  } catch (error) {
    console.error("Error fetching auth token:", error);
    throw error;
  }
};

export default getAuthToken