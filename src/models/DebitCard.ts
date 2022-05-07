import ICustomer from './Customer';
import IPaymentObject from './PaymentObject';
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
  PaymentObject: IPaymentObject;
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

export interface IDebitCardTransitionUpdateResponseSuccess {
  ResponseDetail: {
    IdTransaction: number;
    Status: string;
    Message: string;
    Application: string;
    Vendor: string;
    Reference: string;
    PaymentDate: string;
    CreatedDate: string;
    Amount: number;
    NetValue: number;
    DiscountAmount: number;
    TaxValue: number;
    PaymentMethod: string;
    Customer: ICustomer;
    AmountPayment: number;
    PaymentObject: IPaymentObject;
  };
  HasError: false;
}

export interface IDebitCardArrayResponseSuccess {
  ResponseDetail: {
    Objects: {
      IdTransaction: number;
      Status: string;
      Message: string;
      Application: string;
      Vendor: string;
      Reference: string;
      PaymentDate: string;
      CreatedDate: string;
      Amount: number;
      NetValue: number;
      DiscountAmount: number;
      TaxValue: number;
      PaymentMethod: string;
      Customer: ICustomer;
      AmountPayment: number;
      PaymentObject: IPaymentObject;
    };
  };
  HasError: boolean;
}
