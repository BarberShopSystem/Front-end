import { AxiosRequestConfig } from "axios";
import { apiRequest } from "../../../shared/services/api";

export const getAlgumaCoisa = async () => {
    const config: AxiosRequestConfig = {
        url: '/alguma-rota-que-retorna',
        method: 'GET'
    };
    return await apiRequest<any>(config);
};
