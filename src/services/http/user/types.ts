export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  access_token: string;
}
