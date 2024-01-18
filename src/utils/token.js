export function getToken() {
  return JSON.parse(localStorage.getItem('x-token'));
}

export function setToken(user) {
  return localStorage.setItem('x-token', JSON.stringify(user));
}

export function clearToken() {
  return localStorage.removeItem('x-token');
}
