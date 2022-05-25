import axios, { AxiosRequestConfig } from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();
(axios.defaults as any).baseURL = 'https://api.safe2pay.com.br/v2/';

function tokenHandler(config: AxiosRequestConfig) {
  (config.headers!.common as any)['X-API-KEY'] = process.env.SAFE2PAY_API_KEY;
  (config.headers!.common as any)['Content-Type'] = 'application/json';
  return config;
}

axios.interceptors.request.use(
  (config) => tokenHandler(config),
  (error) => {
    return Promise.reject(error);
  },
);
export default axios;
