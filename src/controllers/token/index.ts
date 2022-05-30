import { AxiosResponse } from 'axios';
import ResponseError from './../../models/ResponseError';
import { getAxiosApiServer } from './../../request';
import { URLS } from '../../models/URLS';
import { TokenRequest, TokenResponse, TokenList } from '../../models/Token';

const BASE_URL = 'https://payment.safe2pay.com.br/v2/';
export const createToken = async (body: TokenRequest): Promise<AxiosResponse<ResponseError | TokenResponse>> => {
  return await getAxiosApiServer(BASE_URL).post(URLS.CREATETOKEN, { data: body });
};

export const listTokens = async (
  PageNumber: number,
  RowsPerPage: number,
): Promise<AxiosResponse<ResponseError | TokenList>> => {
  return await getAxiosApiServer(BASE_URL).get(`${URLS.LISTTOKEN}?PageNumber=${PageNumber}&RowsPerPage=${RowsPerPage}`);
};

export const deleteToken = async (cardToken: string): Promise<AxiosResponse<ResponseError | TokenResponse>> => {
  return await getAxiosApiServer(BASE_URL).delete(`${URLS.DELETETOKEN}?cardToken=${cardToken}`);
};
