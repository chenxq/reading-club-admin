import axios from 'axios';

export default function userService() {
    return axios
    .get("https://reading-club-backend.herokuapp.com/users")
    .then(res => {
      var list = res.data.message;
      console.log("------>", list);
      return list;
    });
}
