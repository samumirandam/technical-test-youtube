import axios from 'axios';

const API_URL = 'https://www.googleapis.com/youtube/v3';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
