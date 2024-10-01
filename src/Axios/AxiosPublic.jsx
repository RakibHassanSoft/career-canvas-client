// src/utils/axiosInstance.js

import axios from 'axios';

const AxiosPublic = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust this to your API's base URL
  timeout: 10000, // Optional: Set a timeout for requests
});

// Optionally, you can set default headers
AxiosPublic.defaults.headers.common['Content-Type'] = 'application/json';

// Add an interceptor if you need to handle requests/responses globally
AxiosPublic.interceptors.response.use(
  (response) => {
    // Handle the response if needed
    return response;
  },
  (error) => {
    // Handle errors globally, if needed
    return Promise.reject(error);
  }
);

export default AxiosPublic;
