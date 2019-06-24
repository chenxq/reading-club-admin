import HttpRequest from '../utils';
import * as _ from 'lodash';

export default async function borrowService(username, bookID) {
  try {
    console.log('图书编号:' + bookID);
    const res = await HttpRequest.postService('/book/borrow', {
      username: username,
      bookID: bookID,
    });
    console.log('借书返回值:', res);

    // if (!res.response || res.response.status !== 200) {
    //   return _.get(res, 'response.data', null);
    // }
    return _.get(res, 'data', null);
  } catch (error) {
    return '借书失败,该书已被借阅';
  }
}
