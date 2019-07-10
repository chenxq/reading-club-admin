import * as _ from 'lodash';
import HttpRequest from '../utils';

export default async function authService({ userName, password }) {
  try {
    const ret = await HttpRequest.postService('/login', {
      userName: userName,
      password: password,
    });
    console.log('loginInfo:' + ret);
    return _.get(ret, 'data', null);
  } catch (error) {
    console.error('Login fail error', error);
    return null;
  }
}
