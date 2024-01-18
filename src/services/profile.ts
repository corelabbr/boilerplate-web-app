// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';
import { stringify } from 'qs';

const prefix = 'v1/profile';

/** 获取当前的用户 GET /api/profile */
export async function queryCurrent(options?: { [key: string]: any }) {
  return request(`/${prefix}?${stringify(options)}`, {
    method: 'GET',
  });
}
