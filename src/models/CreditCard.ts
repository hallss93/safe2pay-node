import ICustomer from './Customer';
import PaymentObject from './PaymentObject';
import Products from './Products';
import Split from './Split';

export default interface ICreditCard {
  IsSandbox: boolean;
  IpAddress: string;
  Application: string;
  Vendor: string;
  CallbackUrl: string;
  Reference: string;
  Meta: any;
  ShouldUseAntiFraud: boolean;
  VisitorID?: string;
  PaymentMethod: string;
  Customer: ICustomer;
  Products: Products[];
  PaymentObject: PaymentObject;
  Splits: Split[];
}

export interface ICreditCardResponseSuccess {
  ResponseDetail: {
    IdTransaction: string;
    Token: string;
    Description: string;
    Status: string;
    Message: string;
    CreditCard: {
      CardNumber: string;
      Brand: number;
      Installments: number;
    };
  };
  HasError: boolean;
}
