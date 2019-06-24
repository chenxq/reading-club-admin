import HttpRequest from '../utils';
import * as _ from 'lodash';

export default async function returnBook(username, bookID) {
  try {
    console.log('图书编号:' + bookID);
    const res = await HttpRequest.postService('/book/return', {
      username: username,
      bookID: bookID,
    });
    console.log('还书返回值:' + res);
    return _.get(res, 'data', null);
  } catch (error) {
    return '还书失败,该书未被借阅';
  }
}
