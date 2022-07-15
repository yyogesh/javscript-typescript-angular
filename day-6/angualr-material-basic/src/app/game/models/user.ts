export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: object
}

interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo
}

interface Geo {
  lat: string;
  lng: string;
}
