import Axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { storageService } from '../utils/storage';

// const API_URL = 'https://localhost:7100/api/v1';
const API_URL = 'https://finnstock.azurewebsites.net/api/v1';

const authRequestInterceptor = (
    config: InternalAxiosRequestConfig<AxiosRequestConfig>
): InternalAxiosRequestConfig => {
    const token = storageService.getToken();
    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }
    config.headers.Accept = 'application/json';
    return config;
};

export const axios = Axios.create({
    baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor, (error) => Promise.reject(error));
axios.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (error.response.status === 401) {
            storageService.clearToken();
            window.location.href = '/auth/login';
        }
        // Promise.reject(error.response);
        throw error.response;
    }
);
