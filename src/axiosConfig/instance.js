import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://api.themoviedb.org',
})
export default axiosInstance;

