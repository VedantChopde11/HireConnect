import axios from "axios"



const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    withCredentials:true // by adding this field browser will send the cookies to server automatically on every single req
})

axiosInstance.interceptors.request.use(async (config) => {
  // Clerk is injected globally in the browser
  const token = await window.Clerk?.session?.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});



export default axiosInstance