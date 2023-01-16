import { api } from '../../api';
import * as types from './types';

export async function login(user: types.ILoginRequest): Promise<types.IUser> {
  const login: types.IUser = await api
    .post('/auth/login', {
      email: user.email,
      password: user.password
    })
    .then((result) => {
      console.log(result.data);
      return result.data.message;
    })
    .catch((error) => {
      console.log(error);
      return [];
    });

  return login;
}
