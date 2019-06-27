import HttpRequest from '../utils';

export default async function fetchBookDetail(bookID) {
  try {
    const ret = await HttpRequest.getService('/book/detail', { bookID });
    return ret;
  } catch (error) {
    return null;
  }
}

