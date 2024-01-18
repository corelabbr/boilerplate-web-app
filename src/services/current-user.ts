// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

const prefix = 'v1/currentUser';

/** 获取当前的用户 GET /api/currentUser */
export async function queryCurrent(options?: { [key: string]: any }) {
  return request(`/${prefix}`, {
    method: 'GET',
    ...(options || {}),
  });
}

export async function updateCurrent(data = {}) {
  return request(`/${prefix}`, {
    method: 'PUT',
    data,
  });
}

export async function changePasswordResource(params = { id: null }) {
  const { id: user_id = 0, ...data } = params || {};
  return request(`/${prefix}/password`, {
    method: 'PATCH',
    data: {
      ...data,
      user_id,
    },
  });
}

export async function defaultPasswordResource(id = null, default_password = null) {
  return request(`/${prefix}/${id}`, {
    method: 'PATCH',
    data: { default_password },
  });
}

export async function updateCompany(data = {}) {
  return request(`/${prefix}/company`, {
    method: 'PUT',
    data,
  });
}
