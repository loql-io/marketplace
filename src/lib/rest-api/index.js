import { doGet } from './helpers';

export const sendMagicLink = (email) =>
  doGet(`${window.location.origin}/api/user/magic-link/${email}`);
export const verifyToken = (token) =>
  doGet(`${window.location.origin}/api/user/verify/${token}`);
export const authenticate = () =>
  doGet(`${window.location.origin}/api/user/authenticate`);
export const doLogout = () =>
  doGet(`${window.location.origin}/api/user/logout`);
