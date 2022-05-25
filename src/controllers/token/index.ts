import { AxiosResponse } from 'axios';
import ResponseError from './../../models/ResponseError';
import axios from './../../request';
import { URLS } from '../../models/URLS';
import { TokenRequest, TokenResponse, TokenList } from '../../models/Token';

export const createToken = async (body: TokenRequest): Promise<AxiosResponse<ResponseError | TokenResponse>> => {
  return await axios.post(URLS.CREATETOKEN, { data: body });
};

export const listTokens = async (
  PageNumber: number,
  RowsPerPage: number,
): Promise<AxiosResponse<ResponseError | TokenList>> => {
  return await axios.get(`${URLS.LISTTOKEN}?PageNumber=${PageNumber}&RowsPerPage=${RowsPerPage}`);
};

export const deleteToken = async (cardToken: string): Promise<AxiosResponse<ResponseError | TokenResponse>> => {
  return await axios.delete(`${URLS.DELETETOKEN}?cardToken=${cardToken}`);
};
