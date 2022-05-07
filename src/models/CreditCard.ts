import ICustomer from './Customer';
import IPaymentObject from './PaymentObject';
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
  PaymentObject: IPaymentObject;
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

export interface ICreditCardTransitionUpdateResponseSuccess {
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

export interface ICreditCardArrayResponseSuccess {
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
