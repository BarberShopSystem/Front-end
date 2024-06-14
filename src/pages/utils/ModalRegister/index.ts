import { AxiosRequestConfig } from "axios";
import { apiRequest } from "../../../shared/services/api";
type Profissional = {
    id: number;
    nome: string;
};

type ModalProps = {
    show: boolean;
    handleClose: () => void;
    profissionais: Profissional[];
};
export const getAlgumaCoisa = async () => {
    const config: AxiosRequestConfig = {
        url: '/alguma-rota-que-retorna',
        method: 'GET'
    };
    return await apiRequest<any>(config);
};
export const postAlgumaCoisa = async (data: ModalProps) => {
    const config: AxiosRequestConfig = {
        url: '/alguma-rota-que-retorna',
        method: 'GET',
        data
    };
    return await apiRequest<any>(config);
};
