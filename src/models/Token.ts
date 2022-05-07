export interface TokenRequest {
    Holder: string;
    CardNumber: string;
    ExpirationDate: string;
    SecurityCode: string;
}

interface ResponseDetail {
    Token?: string;
    TotalItems: number;
    Objects: Token[];
}

interface Token {
    Token: string;
    Holder: string;
    CardNumber: string;
    CreatedDate: string;
    Brand: string;

}

export interface TokenResponse {
    ResponseDetail: ResponseDetail;
    HasError: boolean;
}

export interface TokenList {
    ResponseDetail: ResponseDetail;
    HasError: boolean;
}
