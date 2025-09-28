import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { store, dispatch, signOut } from '@/store';
import { BASE_URL } from '@/configs';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}/api/`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  config => {
    const token = store.getState().auth.token; 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response?.status === 401) {
      console.error('Unauthorized access. Redirecting to login.');

      dispatch(signOut());
    }
    console.error('API Error:', error.response?.data?.message || error.message);

    return Promise.reject(error);
  }
);

interface ApiRequest extends AxiosRequestConfig {
  errorMessage: string;
}

/**
 * Generic function to handle API requests
 * @param config - Axios request configuration
 * @param errorMessage - Default error message in case of failure
 */
const apiRequest = async <T>(config: ApiRequest): Promise<T> => {
  try {
    const response = await axiosInstance(config);

    return response.data;
  } catch (error) {
    const message =
      error instanceof AxiosError
        ? error.response?.data?.message
        : error instanceof Error
          ? error.message
          : 'An unknown error occurred';
    throw new Error(message || config.errorMessage);
  }
};

export default apiRequest;
