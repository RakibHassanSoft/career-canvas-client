import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'api-example'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;