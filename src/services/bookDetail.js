import axios from "axios";

const SERVER_URL = "https://reading-club-backend.herokuapp.com/book/";

export default async function fetchBookDetail(bookID) {
  const url=`${SERVER_URL}${bookID}`
  try {
    const ret = await axios.get(url, {
    });
    return ret;
  } catch (error) {
    return null;
  }
}