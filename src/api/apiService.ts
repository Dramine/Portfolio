import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import API_URL from "./config";
class ApiService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: API_URL,
            headers: {
                "Authorization": "Bearer glpat-_xhqgxPZ9yR65_ezrWVq"
            }
        })
    }

    protected async axiosCall<T>(config: AxiosRequestConfig) {
        try {
            const { data } = await this.axiosInstance.request<T>(config);
            return [null, data]
        }
        catch (error) {
            return [error]
        }
    }
}

export default ApiService