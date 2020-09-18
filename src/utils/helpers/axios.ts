import axios, {AxiosResponse, AxiosError} from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3001',
});

api.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError) => error.message,
);

export default api;
