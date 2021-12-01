import ICustomer from './Customer';
import PaymentObject from './PaymentObject';
import Products from './Products';
import Split from './Split';

export default interface IDebitCard {
  IsSandbox: boolean;
  IpAddress: string;
  Application: string;
  ShouldUseAntiFraud?: boolean;
  VisitorID?: string;
  Vendor: string;
  CallbackUrl: string;
  PaymentMethod: string;
  Reference: string;
  Meta: any;
  Customer: ICustomer;
  Products: Products[];
  PaymentObject: PaymentObject;
  Splits: Split[];
}

export interface IDebitCardResponseSuccess {
  ResponseDetail: {
    IdTransaction: string;
    Token: string;
    Description: string;
    Status: string;
    Message: string;
    DebitCard: {
      CardNumber: string;
      Brand: number;
    };
  };
  HasError: boolean;
}
