import Axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { storageService } from '../utils/storage';

const API_URL = 'http://localhost:7000';

const authRequestInterceptor = (
    config: InternalAxiosRequestConfig<AxiosRequestConfig>
): InternalAxiosRequestConfig => {
    const token = storageService.getToken();
    if (token) {
        config.headers.authorization = `${token}`;
    }
    config.headers.Accept = 'application/json';
    return config;
};

export const axios = Axios.create({
    baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => Promise.reject(error)
);
