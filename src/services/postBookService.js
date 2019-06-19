import * as _ from 'lodash';
import HttpRequest from '../utils';

export default async function postBookService(data) {
  try {
    const ret = await HttpRequest.postService('/book/add', data);
    return _.get(ret, 'data', null);
  } catch (error) {
    console.error('add book service error', error);
    return null;
  }
}
