import axios from "axios";
const SERVER_URL = "https://reading-club-backend.herokuapp.com/book/add";

export default async function postBook(data) {
  try {
    axios.post(SERVER_URL, data)
      .then(res => {
        console.log('res=>', res);
      })
  } catch (error) {
    return null;
  }
}
