import axios from 'axios';

const SERVER_URL = 'https://reading-club-backend.herokuapp.com/users';

export default function userService(url = SERVER_URL) {
  return axios.get(url).then((res) => {
    if (res.status !== 200) {
      throw new Error({ ...res });
    }
    var list = res.data.message;
    return list;
  });
}
