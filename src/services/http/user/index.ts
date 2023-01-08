import { api } from '../../api';
import * as types from './types';

export async function login(user: types.ILoginRequest): Promise<types.IUser> {
  const login: types.IUser[] = await api
    .post('/users/login', {
      email: user.email,
      password: user.password
    })
    .then((result) => {
      return result.data.message[0];
    })
    .catch((error) => {
      console.log(error);
      return [];
    });

  return login;
}
