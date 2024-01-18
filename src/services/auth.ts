// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';
const prefix = 'v1/login';

/** 发送验证码 POST /api/login/captcha */
export async function getCaptcha(
  params: {
    // query
    /** 手机号 */
    phone?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.FakeCaptcha>(`/${prefix}/captcha`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>(`/${prefix}/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
