export interface IPaymentMethod {
  Code: string;
  Name: string;
}

export default interface IMerchantPaymentMethod {
  PaymentMethod: IPaymentMethod;
  IsEnabled: boolean;
  InstallmentLimit: number;
  MinorInstallmentAmount: number;
  IsInstallmentEnable: boolean;
}

export interface IMerchantPaymentMethodResponseSuccess {
  ResponseDetail: IMerchantPaymentMethod[];
  HasError: boolean;
}
