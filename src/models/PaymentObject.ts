export default interface IPaymentObject {
  Holder: string;
  CardNumber?: string;
  ExpirationDate?: string;
  SecurityCode?: string;
  Token?: string;
  InstallmentQuantity: number;
  IsPreAuthorization: boolean;
  IsApplyInterest: boolean;
  InterestRate: number;
  SoftDescriptor: string;
}
