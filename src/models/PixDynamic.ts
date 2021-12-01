import Customer from './Customer';
import Products from './Products';
import Split from './Split';

export default interface IPixDynamic {
  IsSandbox: boolean;
  IpAddress: string;
  Application: string;
  Vendor: string;
  CallbackUrl: string;
  Reference: string;
  Meta: any;
  PaymentMethod: string;
  Expiration: number;
  Customer: Customer;
  Products: Products[];
  Splits: Split[];
}

export interface IPixDynamicResponseSuccess {
  ResponseDetail: {
    IdTransaction: string;
    Status: string;
    Message: string;
    Description: string;
    QrCode: string;
    Key: string;
  };
  HasError: boolean;
}
