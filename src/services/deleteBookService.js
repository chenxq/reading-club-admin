import * as _ from 'lodash';
import HttpRequest from '../utils';

export default async function deleteBookService(bookID) {
  const path = `/book/delete/${bookID}`;
  try {
    const ret = await HttpRequest.generalService(path, 'DELETE');
    return _.get(ret, 'data', null);
  } catch (error) {
    console.error('delete book service error', error);
    return null;
  }
}
