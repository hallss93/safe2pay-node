import { AxiosResponse } from 'axios';
import CreditCard, { ICreditCardResponseSuccess } from './../../models/CreditCard';
import PixDynamic, { IPixDynamicResponseSuccess } from './../../models/PixDynamic';
import PixStatic, { IPixStaticResponseSuccess } from './../../models/PixStatic';
import ResponseError from './../../models/ResponseError';
import axios from './../../request';

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

export const creditCard = async (
  body: CreditCard,
): Promise<AxiosResponse<ResponseError | ICreditCardResponseSuccess>> => {
  return await axios.post(URLS.PAYMENT, { data: body });
};
