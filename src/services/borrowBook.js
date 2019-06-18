import HttpRequest from '../utils';

export default async function borrowBook(username, bookID) {
  try {
    const ret = await HttpRequest.postService('/book/borrow', {
      username,
      bookID,
    });
    return ret;
  } catch (error) {
    console.error('Borrow book error: ', error);
  }
}

export async function addBook({ name, author }) {
  try {
    const ret = await HttpRequest.postService('/book/add', {
      name,
      author,
    });
    return ret;
  } catch (error) {
    console.error('Borrow book error: ', error);
  }
}

export async function getBookList(data = {}) {
  try {
    const ret = await HttpRequest.getService('/book/list', data);
    return ret;
  } catch (error) {
    console.error('Borrow book error: ', error);
  }
}
