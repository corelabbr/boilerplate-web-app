import { request } from '@umijs/max';

export interface StateType {
  status?: 'ok' | 'error';
  currentAuthority?: 'GUEST' | 'PROFILE' | 'MANAGER' | 'ADMIN' | 'SUPER_ADMIN';
}

export interface UserRegisterParams {
  mail: string;
  password: string;
  confirm: string;
  mobile: string;
  captcha: string;
  prefix: string;
}

export async function fakeRegister(params: UserRegisterParams) {
  return request('/api/register', {
    method: 'POST',
    data: params,
  });
}
