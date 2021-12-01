export default interface IInstallments {
  Installments: number;
  InstallmentValue: number;
  TotalValue: number;
  AppliedTax: number;
}

export interface IInstallmentValueResponseSuccess {
  ResponseDetail: {
    Installments: IInstallments[];
  };
  HasError: boolean;
}

export interface IInstallmentValueResponseError {
  HasError: boolean;
  Error: string;
}
