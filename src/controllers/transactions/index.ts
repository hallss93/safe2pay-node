import { AxiosResponse } from 'axios';
import { ICreditCardResponseSuccess } from '../../models/CreditCard';
import { IDebitCardResponseSuccess } from '../../models/DebitCard';
import { IPixDynamicResponseSuccess } from '../../models/PixDynamic';
import CancelResponseSuccess from './../../models/CancelResponseSuccess';
import { IInstallmentValueResponseError, IInstallmentValueResponseSuccess } from './../../models/Installment';
import { IMerchantPaymentMethodResponseSuccess } from './../../models/MerchantPaymentMethod';
import ResponseError from './../../models/ResponseError';
import axios from './../../request';

enum URLS {
  CREDITCAPTURE = 'CreditCard/Capture/',
  CREDITCARDCANCEL = 'CreditCard/Cancel/',
  CREDITCARDINSTALLMENTVALUE = 'CreditCard/InstallmentValue/?',
  DEBITCARDCANCEL = 'DebitCard/Cancel/',
  MERCHANTPAYMENTMETHODLIST = 'MerchantPaymentMethod/List',
  PIXCANCEL = 'Pix/Cancel/',
  CONSULTTRANSACTION = 'transaction/Get'
}

export const merchantPaymentMethodList = async (): Promise<
  AxiosResponse<ResponseError | IMerchantPaymentMethodResponseSuccess>
> => {
  return await axios.get(URLS.MERCHANTPAYMENTMETHODLIST);
};

export const InstallmentValue = async (
  amount: number,
): Promise<AxiosResponse<IInstallmentValueResponseError | IInstallmentValueResponseSuccess>> => {
  return await axios.get(`${URLS.MERCHANTPAYMENTMETHODLIST}amount=${amount}`);
};

export const cancelPix = async (
  idTransaction: number,
): Promise<AxiosResponse<ResponseError | CancelResponseSuccess>> => {
  return await axios.delete(`${URLS.PIXCANCEL}/${idTransaction}`);
};

export const cancelCredit = async (
  idTransaction: number,
  amount: number,
): Promise<AxiosResponse<ResponseError | CancelResponseSuccess>> => {
  return await axios.delete(`${URLS.CREDITCARDCANCEL}/${idTransaction}/${amount}`);
};

export const cancelDebit = async (
  idTransaction: number,
): Promise<AxiosResponse<ResponseError | CancelResponseSuccess>> => {
  return await axios.delete(`${URLS.DEBITCARDCANCEL}/${idTransaction}`);
};

export const captureCredit = async (
  idTransaction: number,
  amount?: number,
): Promise<AxiosResponse<ResponseError | ICreditCardResponseSuccess>> => {
  return await axios.put(`${URLS.CREDITCAPTURE}/${idTransaction}/${amount}`);
};

export const consultTransaction = async (
  idTransaction: number,
): Promise<AxiosResponse<ResponseError | IDebitCardResponseSuccess | ICreditCardResponseSuccess | IPixDynamicResponseSuccess>> => {
  return await axios.get(`${URLS.CONSULTTRANSACTION}?Id=${idTransaction}`);
};
