import {ApiUrl} from './common/Config';
import {post, get} from './common/RequestHelper';

export const register = req => {
  const url = `${ApiUrl}/users`;
  return post(url, req);
};

export const autoLogin = id => {
  const url = `${ApiUrl}/users/${id}`;
  return get(url);
};
