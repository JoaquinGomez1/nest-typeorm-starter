import { ONE_DAY } from './time';

export default {
  httpOnly: true,
  secure: process.env.NODE_ENV !== 'development',
  sameSite: 'strict',
  path: '/',
  maxAge: ONE_DAY,
};
