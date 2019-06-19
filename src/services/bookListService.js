import * as _ from 'lodash';
import HttpRequest from '../utils';

export default async function fetchBookList() {
  try {
    const ret = await HttpRequest.getService('/book/list');
    return _.get(ret, 'data', null);
  } catch (error) {
    return null;
  }
}
