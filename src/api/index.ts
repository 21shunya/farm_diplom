import axios from 'axios';

export const API_URL = 'http://188.120.243.108:3000/v1';

const api = axios.create({
  // withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  config.headers = config.headers ?? {};
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

api.interceptors.request.use((request) => {
  const { baseURL, url, method, data, params } = request;

  console.log(`REQUEST ${url}:`, { baseURL, url, method, params, data });
  return request;
});

api.interceptors.response.use((response) => {
  const {
    data,
    status,
    request: { responseURL },
  } = response;

  console.log(`RESPONSE ${responseURL.slice(30)}:`, { data, status, responseURL });
  return response;
});

export default api;
