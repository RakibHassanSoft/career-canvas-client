import axios from "axios";

// Set the base URL for the deployed server
const axiosPublicForDeployment = axios.create({
    baseURL: 'https://clean-server.onrender.com/api'
});

const useAxiosPublicDep = () => {
    return axiosPublicForDeployment;
};

export default useAxiosPublicDep;
