import axios, {CreateAxiosDefaults} from 'axios';

export const BASE_URL = 'https://14.design.htmlacademy.pro/six-cities';
export const TIMEOUT = 5000;

const config: CreateAxiosDefaults = {
  baseURL: BASE_URL,
  timeout: TIMEOUT,
};

export const api = axios.create(config);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
      console.error('Unauthorized access - Redirecting to login');
    }
    return Promise.reject(error);
  }
);
