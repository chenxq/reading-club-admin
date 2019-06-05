import axios from "axios";

const SERVER_URL = "https://reading-club-backend.herokuapp.com/";

export default async function fetchServer(url = SERVER_URL) {
  try {
    const ret = await axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    });
    return ret;
  } catch (error) {
    return null;
  }
}