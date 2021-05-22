import {ApiUrl} from './common/Config';
import {post, get} from './common/RequestHelper';

export const register = req => {
  const url = `${ApiUrl}/users`;
  return post(url, req);
};

export const getAllUsers = () => {
  const url = `${ApiUrl}/users/`;
  return get(url);
};
