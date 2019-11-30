import axios from 'axios';
const setAuthToken = (token) => {
  if (token) {
    // token存在设置header,
    axios.defaults.headers.common['Authorization'] = 'Basic ' + token;
  } else {
    // 没有token就移除
    delete axios.defaults.headers.common['Authorization'];
  }
};
export default setAuthToken;
