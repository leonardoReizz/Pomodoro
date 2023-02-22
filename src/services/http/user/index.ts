import { api } from '../../api';
import { IDefaultApiResult } from '../types';
import * as types from './types';

async function login(user: types.ILoginRequest): Promise<types.IUser> {
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

async function register(user: types.IRegisterData): Promise<IDefaultApiResult> {
  return await api
    .post('/users', {
      ...user
    })
    .then((result) => {
      console.log(result);
      return { status: result.data.status };
    })
    .catch((error) => {
      console.log(error);
      return { status: error?.response?.status, message: error?.response?.data?.message };
    });
}

export default { register, login };
