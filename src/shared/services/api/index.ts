import axios, { AxiosRequestConfig } from "axios";

const urlBase = 'http://localhost:3001';

export const apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
    const api = axios.create({
        baseURL: urlBase,
        headers: {
            "Content-Type": "application/json",
        }
    });

    try {
        const response = await api(config);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};