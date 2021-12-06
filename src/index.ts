import { AxiosResponse } from 'axios';
import { pixDynamic, pixStatic, debitCard, creditCard } from './controllers/payments';
import {
  InstallmentValue,
  cancelCredit,
  cancelDebit,
  cancelPix,
  captureCredit,
  consultTransaction,
  merchantPaymentMethodList,
} from './controllers/transactions';
import CancelResponseSuccess from './models/CancelResponseSuccess';
import CreditCard, { ICreditCardResponseSuccess } from './models/CreditCard';
import DebitCard, { IDebitCardResponseSuccess } from './models/DebitCard';
import { IInstallmentValueResponseError, IInstallmentValueResponseSuccess } from './models/Installment';
import { IMerchantPaymentMethodResponseSuccess } from './models/MerchantPaymentMethod';
import PixDynamic, { IPixDynamicResponseSuccess } from './models/PixDynamic';
import PixStatic, { IPixStaticResponseSuccess } from './models/PixStatic';
import ResponseError from './models/ResponseError';

class Safe2Pay {
  /* Pagamentos */
  public pixDynamic: (body: PixDynamic) => Promise<AxiosResponse<ResponseError | IPixDynamicResponseSuccess>>;
  public pixStatic: (body: PixStatic) => Promise<AxiosResponse<ResponseError | IPixStaticResponseSuccess>>;
  public creditCard: (body: CreditCard) => Promise<AxiosResponse<ResponseError | ICreditCardResponseSuccess>>;
  public debitCard: (body: DebitCard) => Promise<AxiosResponse<ResponseError | IDebitCardResponseSuccess>>;

  /* Transações */
  public merchantPaymentMethodList: () => Promise<AxiosResponse<ResponseError | IMerchantPaymentMethodResponseSuccess>>;
  public installmentValue: (
    amount: number,
  ) => Promise<AxiosResponse<IInstallmentValueResponseError | IInstallmentValueResponseSuccess>>;

  /* Estorno */
  public cancelPix: (idTransaction: number) => Promise<AxiosResponse<ResponseError | CancelResponseSuccess>>;
  public cancelCredit: (
    idTransaction: number,
    amount: number,
  ) => Promise<AxiosResponse<ResponseError | CancelResponseSuccess>>;
  public cancelDebit: (idTransaction: number) => Promise<AxiosResponse<ResponseError | CancelResponseSuccess>>;
  public captureCredit: (
    idTransaction: number,
    amount?: number,
  ) => Promise<AxiosResponse<ResponseError | ICreditCardResponseSuccess>>;
  public consultTransaction: (idTransaction: number) => Promise<AxiosResponse<ResponseError | IDebitCardResponseSuccess | ICreditCardResponseSuccess | IPixDynamicResponseSuccess>>;
}

/* Pagamentos */
Safe2Pay.prototype.pixDynamic = pixDynamic;
Safe2Pay.prototype.pixStatic = pixStatic;
Safe2Pay.prototype.debitCard = debitCard;
Safe2Pay.prototype.creditCard = creditCard;

/* Transações */
Safe2Pay.prototype.merchantPaymentMethodList = merchantPaymentMethodList;
Safe2Pay.prototype.installmentValue = InstallmentValue;
Safe2Pay.prototype.consultTransaction = consultTransaction;

/* Estorno */
Safe2Pay.prototype.cancelPix = cancelPix;
Safe2Pay.prototype.cancelCredit = cancelCredit;
Safe2Pay.prototype.cancelDebit = cancelDebit;

/* Captura */
Safe2Pay.prototype.captureCredit = captureCredit;

export default Safe2Pay;
