import HttpRequest from '../utils';
import * as _ from 'lodash';

export default async function returnService(username, bookID) {
  try {
    const res = await HttpRequest.postService('/book/return', {
      username: username,
      bookID: bookID,
    });
    return _.get(res, 'data', null);
  } catch (error) {}
}
