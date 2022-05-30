import { AxiosResponse } from 'axios';
import DebitCard, { IDebitCardResponseSuccess } from '../../models/DebitCard';
import CreditCard, { ICreditCardResponseSuccess } from './../../models/CreditCard';
import PixDynamic, { IPixDynamicResponseSuccess } from './../../models/PixDynamic';
import PixStatic, { IPixStaticResponseSuccess } from './../../models/PixStatic';
import ResponseError from './../../models/ResponseError';
import { getAxiosApiServer } from './../../request';

enum URLS {
  PAYMENT = 'Payment',
  STATICPIX = 'StaticPix',
}
const BASE_URL = 'https://payment.safe2pay.com.br/v2/';

export const pixDynamic = async (
  body: PixDynamic,
): Promise<AxiosResponse<ResponseError | IPixDynamicResponseSuccess>> => {
  return await getAxiosApiServer(BASE_URL).post(URLS.PAYMENT, { data: body });
};

export const pixStatic = async (body: PixStatic): Promise<AxiosResponse<ResponseError | IPixStaticResponseSuccess>> => {
  return await getAxiosApiServer(BASE_URL).post(URLS.STATICPIX, { data: body });
};

export const creditCard = async (body: CreditCard): Promise<ResponseError | ICreditCardResponseSuccess> => {
  try {
    const res = await getAxiosApiServer(BASE_URL).post(URLS.PAYMENT, body);
    return res.data;
  } catch (e) {
    return (e as AxiosResponse).data as ResponseError;
  }
};

export const debitCard = async (body: DebitCard): Promise<AxiosResponse<ResponseError | IDebitCardResponseSuccess>> => {
  return await getAxiosApiServer(BASE_URL).post(URLS.PAYMENT, { data: body });
};
