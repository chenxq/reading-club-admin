import * as _ from 'lodash';
import HttpRequest from '../utils';

export default async function fetchUserListService() {
  try {
    const ret = await HttpRequest.getService('/user/list');
    return _.get(ret, 'data', null);
  } catch (error) {
    return null;
  }
}
