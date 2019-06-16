import axios from "axios";
const SERVER_URL = "https://reading-club-backend.herokuapp.com/book/list";

export default async function fetchBookList() {
  try {
    const ret = await axios.get(SERVER_URL);
    return ret.data.message;
  } catch (error) {
    return null;
  }
}
