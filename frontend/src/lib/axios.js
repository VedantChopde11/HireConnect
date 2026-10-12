import axios from "axios";

const rawApiUrl = (import.meta.env.VITE_API_URL || "").trim().replace(/\/+$/, "");
const baseURL = rawApiUrl ? `${rawApiUrl}/api` : "/api";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(async (config) => {
  try {
    // If Clerk is injected but not yet loaded, wait for it
    if (window.Clerk && !window.Clerk.loaded && typeof window.Clerk.load === "function") {
      try {
        await window.Clerk.load();
      } catch (loadErr) {
        console.warn("Error calling Clerk.load():", loadErr);
      }
    }

    let token = await window.Clerk?.session?.getToken();

    // If session is still settling, retry briefly (up to 500ms)
    if (!token && window.Clerk) {
      for (let i = 0; i < 5; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        token = await window.Clerk?.session?.getToken();
        if (token) break;
      }
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (err) {
    console.warn("Error attaching Clerk auth token to request:", err);
  }

  return config;
});

export default axiosInstance;