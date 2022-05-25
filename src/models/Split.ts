export default interface ISplit {
  CodeTaxType: number;
  CodeReceiverType: string;
  IdReceiver?: number;
  Identity?: string;
  Name: string;
  IsPayTax: boolean;
  Amount: number;
}
