import axios from "axios";

const axiosPublic = axios.create({
    // baseURL: '/'
    // baseURL: 'https://clean-server.onrender.com'
    // baseURL: 'http://localhost:5000'
    // baseURL: 'http://localhost:8000'
    
    // Arafat
    baseURL: 'https://careen-canvas-server.vercel.app'
    
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;