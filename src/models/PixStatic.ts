export default interface IPixStatic {
  Description: string;
  Reference: string;
  CallbackUrl: string;
}

export interface IPixStaticResponseSuccess {
  ResponseDetail: {
    Id: string;
    Identifier: string;
    Reference: string;
    Key: string;
    QrCode: string;
  };
  HasError: boolean;
}
