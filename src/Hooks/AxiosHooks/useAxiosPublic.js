import axios from "axios";

const axiosPublic = axios.create({

     baseURL: 'http://localhost:8000'
  
    //   baseURL:"https://careen-canvas-server.vercel.app"

    //ultimate 
    //   baseURL:"https://careen-canvas-server.onrender.com"
    
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;