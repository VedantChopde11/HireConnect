import axios from "axios"

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    withCredentials:true // by adding this field browser will send the cookies to server automatically on every single req
})

console.log("BACCKEND_URL:  " , import.meta.env.VITE_API_URL)

export default axiosInstance