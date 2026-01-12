import axios from "axios"

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api`,
    //withCredentials:true // by adding this field browser will send the cookies to server automatically on every single req
})

axiosInstance.interceptors.request.use(async (config) => {
  const auth = getAuth();
  const token = await auth.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});



export default axiosInstance