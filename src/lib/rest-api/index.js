import { doGet } from './helpers';

let windowLocation;

if (typeof window !== 'undefined') {
  windowLocation = window.location.origin;
}

export const sendMagicLink = (email) =>
  doGet(`${windowLocation}/api/user/magic-link/${email}`);
export const verifyToken = (token) =>
  doGet(`${windowLocation}/api/user/verify/${token}`);
export const authenticate = () =>
  doGet(`${windowLocation}/api/user/authenticate`);
export const doLogout = () => doGet(`${windowLocation}/api/user/logout`);
