import axios from "axios";

const API_BASE_URL = "http://172.16.1.123:3004";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInR5cGUiOjEsImd1aWQiOiI5YTFiZTIzNS05OGJhLTQxOTYtOTMyYi0xMmY0NTc3NjNmYjQiLCJpZCI6MSwiaXNzIjoiaHR0cDovL2N1c2Nzb2Z0LmNvbS8iLCJpYXQiOjE3NDk2MjYzMjQsImV4cCI6MTc0OTY1NTEyNH0.6Zq5xL1GgPDIYmSxkWJ6OiZmUQ-9NRC7poF3Ic9QrAU";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const RestClient = {
  get: async (url, config = {}) => {
    const response = await axiosInstance.get(url, config);
    return response.data;
  },

  post: async (url, data = {}, config = {}) => {
    const response = await axiosInstance.post(url, data, config);
    return response.data;
  },

  put: async (url, data = {}, config = {}) => {
    const response = await axiosInstance.put(url, data, config);
    return response.data;
  },

  patch: async (url, data = {}, config = {}) => {
    const response = await axiosInstance.patch(url, data, config);
    return response.data;
  },

  delete: async (url, config = {}) => {
    const response = await axiosInstance.delete(url, config);
    return response.data;
  },
};

export default RestClient;
