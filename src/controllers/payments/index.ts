import { AxiosResponse } from 'axios';
import DebitCard, { IDebitCardResponseSuccess } from '../../models/DebitCard';
import CreditCard, { ICreditCardResponseSuccess } from './../../models/CreditCard';
import PixDynamic, { IPixDynamicResponseSuccess } from './../../models/PixDynamic';
import PixStatic, { IPixStaticResponseSuccess } from './../../models/PixStatic';
import ResponseError from './../../models/ResponseError';
import axios from './../../request';
(axios.defaults as any).baseURL = 'https://payment.safe2pay.com.br/v2/';

enum URLS {
  PAYMENT = 'Payment',
  STATICPIX = 'StaticPix',
}

export const pixDynamic = async (
  body: PixDynamic,
): Promise<AxiosResponse<ResponseError | IPixDynamicResponseSuccess>> => {
  return await axios.post(URLS.PAYMENT, { data: body });
};

export const pixStatic = async (body: PixStatic): Promise<AxiosResponse<ResponseError | IPixStaticResponseSuccess>> => {
  return await axios.post(URLS.STATICPIX, { data: body });
};

export const creditCard = async (body: CreditCard): Promise<ResponseError | ICreditCardResponseSuccess> => {
  try {
    const res = await axios.post(URLS.PAYMENT, body);
    return res.data;
  } catch (e) {
    return (e as AxiosResponse).data as ResponseError;
  }
};

export const debitCard = async (body: DebitCard): Promise<AxiosResponse<ResponseError | IDebitCardResponseSuccess>> => {
  return await axios.post(URLS.PAYMENT, { data: body });
};
