import { AxiosResponse } from 'axios';
import { creditCard, debitCard, pixDynamic, pixStatic } from './controllers/payments';
import { createToken } from './controllers/token';
import {
  cancelCredit,
  cancelDebit,
  cancelPix,
  captureCredit,
  consultTransaction, InstallmentValue, listTransaction,
  merchantPaymentMethodList, updateStatusTransaction, updateTransaction
} from './controllers/transactions';
import CancelResponseSuccess from './models/CancelResponseSuccess';
import CreditCard, {
  ICreditCardArrayResponseSuccess,
  ICreditCardResponseSuccess,
  ICreditCardTransitionUpdateResponseSuccess
} from './models/CreditCard';
import DebitCard, {
  IDebitCardArrayResponseSuccess,
  IDebitCardResponseSuccess,
  IDebitCardTransitionUpdateResponseSuccess
} from './models/DebitCard';
import { IInstallmentValueResponseError, IInstallmentValueResponseSuccess } from './models/Installment';
import { IMerchantPaymentMethodResponseSuccess } from './models/MerchantPaymentMethod';
import PixDynamic, { IPixDynamicResponseSuccess } from './models/PixDynamic';
import PixStatic, { IPixStaticResponseSuccess } from './models/PixStatic';
import ResponseError from './models/ResponseError';
import { TokenRequest, TokenResponse } from './models/Token';
import { ITransactionStatus } from './models/TransactionStatus';

class Safe2Pay {
  /* Pagamentos */
  public pixDynamic: (body: PixDynamic) => Promise<AxiosResponse<ResponseError | IPixDynamicResponseSuccess>>;
  public pixStatic: (body: PixStatic) => Promise<AxiosResponse<ResponseError | IPixStaticResponseSuccess>>;
  public creditCard: (body: CreditCard) => Promise<ResponseError | ICreditCardResponseSuccess>;
  public debitCard: (body: DebitCard) => Promise<AxiosResponse<ResponseError | IDebitCardResponseSuccess>>;

  /* Transações */
  public merchantPaymentMethodList: () => Promise<AxiosResponse<ResponseError | IMerchantPaymentMethodResponseSuccess>>;
  public installmentValue: (amount: number,) => Promise<AxiosResponse<IInstallmentValueResponseError | IInstallmentValueResponseSuccess>>;
  public consultTransaction: (idTransaction: number,) => Promise<AxiosResponse<ResponseError | IDebitCardResponseSuccess | ICreditCardResponseSuccess | IPixDynamicResponseSuccess>>;
  public updateTransaction: (idTransaction: number, isUpdateReference: boolean, isUpdateCallBackUrl: boolean, reference: string, callbackUrl: string,) => Promise<AxiosResponse<ResponseError | ICreditCardTransitionUpdateResponseSuccess | IDebitCardTransitionUpdateResponseSuccess>>;
  public updateStatusTransaction: (idTransaction: number, idTransactionStatus: ITransactionStatus,) => Promise<AxiosResponse<ResponseError | ICreditCardTransitionUpdateResponseSuccess | IDebitCardTransitionUpdateResponseSuccess>
  >;
  public listTransaction: (PageNumber: string, RowsPerPage: string, CreatedDateInitial: string, CreatedDateEnd: string, PaymentDateInitial: string, PaymentDateEnd: string, AmountInitial: string, AmountEnd: string, Object: IDebitCardResponseSuccess | ICreditCardResponseSuccess | IPixDynamicResponseSuccess,) => Promise<AxiosResponse<ResponseError | IDebitCardArrayResponseSuccess | ICreditCardArrayResponseSuccess>>;

  /* Estorno */
  public cancelPix: (idTransaction: number) => Promise<AxiosResponse<ResponseError | CancelResponseSuccess>>;
  public cancelCredit: (idTransaction: number, amount: number,) => Promise<AxiosResponse<ResponseError | CancelResponseSuccess>>;
  public cancelDebit: (idTransaction: number) => Promise<AxiosResponse<ResponseError | CancelResponseSuccess>>;
  public captureCredit: (idTransaction: number, amount?: number,) => Promise<AxiosResponse<ResponseError | ICreditCardResponseSuccess>>;

  /* Tokenização */
  public createToken: (body: TokenRequest) => Promise<AxiosResponse<ResponseError | TokenResponse>>;
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
Safe2Pay.prototype.updateTransaction = updateTransaction;
Safe2Pay.prototype.updateStatusTransaction = updateStatusTransaction;
Safe2Pay.prototype.listTransaction = listTransaction;

/* Estorno */
Safe2Pay.prototype.cancelPix = cancelPix;
Safe2Pay.prototype.cancelCredit = cancelCredit;
Safe2Pay.prototype.cancelDebit = cancelDebit;

/* Captura */
Safe2Pay.prototype.captureCredit = captureCredit;

/* Tokenização */

Safe2Pay.prototype.createToken = createToken;

export default Safe2Pay;
