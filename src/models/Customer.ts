export interface IAddress {
  CityName: string;
  Complement: string;
  CountryName: string;
  District: string;
  Number: string;
  StateInitials: string;
  Street: string;
  ZipCode: string;
}

export default interface ICustomer {
  Address: IAddress;
  Email: string;
  Identity: string;
  Name: string;
  Phone: string;
}
