import { AxiosResponse } from 'axios';
import {
  ICreditCardArrayResponseSuccess,
  ICreditCardResponseSuccess,
  ICreditCardTransitionUpdateResponseSuccess,
} from '../../models/CreditCard';
import {
  IDebitCardArrayResponseSuccess,
  IDebitCardResponseSuccess,
  IDebitCardTransitionUpdateResponseSuccess,
} from '../../models/DebitCard';
import { IPixDynamicResponseSuccess } from '../../models/PixDynamic';
import { ITransactionStatus } from '../../models/TransactionStatus';
import CancelResponseSuccess from './../../models/CancelResponseSuccess';
import { IInstallmentValueResponseError, IInstallmentValueResponseSuccess } from './../../models/Installment';
import { IMerchantPaymentMethodResponseSuccess } from './../../models/MerchantPaymentMethod';
import ResponseError from './../../models/ResponseError';
import axios from './../../request';
import { URLS } from '../../models/URLS';

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

export const updateTransaction = async (
  Id: number,
  isUpdateReference: boolean,
  isUpdateCallBackUrl: boolean,
  Reference: string,
  CallBackUrl: string,
): Promise<
  AxiosResponse<ResponseError | ICreditCardTransitionUpdateResponseSuccess | IDebitCardTransitionUpdateResponseSuccess>
> => {
  return await axios.put(
    `${URLS.UPDATETRANSACTION}?isUpdateReference=${isUpdateReference}&isUpdateCallBackUrl=${isUpdateCallBackUrl}`,
    { Id, Reference, CallBackUrl },
  );
};

export const updateStatusTransaction = async (
  idTransaction: number,
  idTransactionStatus: ITransactionStatus,
): Promise<
  AxiosResponse<ResponseError | ICreditCardTransitionUpdateResponseSuccess | IDebitCardTransitionUpdateResponseSuccess>
> => {
  return await axios.put(
    `${URLS.UPDATESTATUSTRANSACTION}?idTransaction=${idTransaction}&idTransactionStatus=${idTransactionStatus}`,
  );
};

export const consultTransaction = async (
  idTransaction: number,
): Promise<
  AxiosResponse<ResponseError | IDebitCardResponseSuccess | ICreditCardResponseSuccess | IPixDynamicResponseSuccess>
> => {
  return await axios.get(`${URLS.CONSULTTRANSACTION}?Id=${idTransaction}`);
};

export const listTransaction = async (
  PageNumber: string,
  RowsPerPage: string,
  CreatedDateInitial: string,
  CreatedDateEnd: string,
  PaymentDateInitial: string,
  PaymentDateEnd: string,
  AmountInitial: string,
  AmountEnd: string,
  Object: IDebitCardResponseSuccess | ICreditCardResponseSuccess | IPixDynamicResponseSuccess,
): Promise<AxiosResponse<ResponseError | IDebitCardArrayResponseSuccess | ICreditCardArrayResponseSuccess>> => {
  return await axios.get(
    `${URLS.LISTTRANSACTION}?PageNumber=${PageNumber}&RowsPerPage=${RowsPerPage}&CreatedDateInitial=${CreatedDateInitial}&CreatedDateEnd=${CreatedDateEnd}&PaymentDateInitial=${PaymentDateInitial}&PaymentDateEnd=${PaymentDateEnd}&AmountInitial=${AmountInitial}&AmountEnd=${AmountEnd}&Object=${Object}`,
  );
};
