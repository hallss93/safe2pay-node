import axios, { AxiosRequestConfig } from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

function tokenHandler(config: AxiosRequestConfig) {
  (config.headers!.common as any)['X-API-KEY'] = process.env.SAFE2PAY_API_KEY;
  (config.headers!.common as any)['Content-Type'] = 'application/json';
  return config;
}

let axiosApiServer = axios.create({
  baseURL: 'https://payment.safe2pay.com.br/v2/',
  timeout: 15000,
});

export const getAxiosApiServer = (baseURL: string) => {
  if (baseURL && baseURL !== axiosApiServer.defaults.baseURL) {
    axiosApiServer = axios.create({
      baseURL,
      timeout: 15000,
    });
  }

  axiosApiServer.interceptors.request.use(
    (config) => tokenHandler(config),
    (error) => {
      return Promise.reject(error);
    },
  );

  return axiosApiServer;
};
