export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
