import axios from 'axios';

const BASE_URL = 'https://ringcentral-qa-library.herokuapp.com';
// const BASE_URL = 'http://localhost:1323';

export default class HttpRequest {
  static _getRequestUrl(path, params = {}) {
    const queryString =
      Object.keys(params).length > 0 &&
      `?${Object.keys(params)
        .map((k) => `${k}=${params[k]}`)
        .join('&')}`;
    const requestUrl = `${BASE_URL}${path}${queryString || ''}`;
    return requestUrl;
  }

  /**
   * Post service
   * @param {*} path, like '/book/borrow', start with '/'
   * @param {*} data
   */
  static async postService(path, data = {}, params = {}) {
    try {
      const requestUrl = HttpRequest._getRequestUrl(path, params);
      const ret = await axios.post(requestUrl, JSON.stringify(data || {}));
      return ret;
    } catch (error) {
      console.error(`Request error: ${error.message}`);
      return error;
    }
  }

  /**
   * Get service
   * @param {*} path
   * @param {*} data {a:1,b:2} will be transformed to ?a=1&b=2
   */
  static async getService(path, data = {}) {
    const requestUrl = HttpRequest._getRequestUrl(path);
    try {
      const ret = await axios.get(requestUrl, { params: data });
      return ret;
    } catch (error) {
      console.error(`Request error: ${error.message}`);
      return error;
    }
  }

  /**
   * Delete service
   * @param {*} path
   * @param {*} data {a:1,b:2} will be transformed to ?a=1&b=2
   */
  static async deleteService(path, data = {}) {
    const requestUrl = HttpRequest._getRequestUrl(path);
    try {
      console.log('===>Delete service', data);
      const ret = await axios.delete(requestUrl, { data });
      return ret;
    } catch (error) {
      console.error(`Delete request error: ${error.message}`);
      return error;
    }
  }

  static async generalService(path, method, data = {}) {
    if (!method) {
      throw new Error('Http request method is not valid!');
    }

    const requestUrl = HttpRequest._getRequestUrl(path);

    try {
      const ret = await axios({
        method,
        url: requestUrl,
        headers: {
          'Content-Type': 'application/json',
        },
        params: (method || 'get').toLowerCase === 'get' ? data : null,
        data: JSON.stringify(data || {}),
      });

      return ret;
    } catch (error) {
      console.error(`Request error: ${error.message}`);
      return error;
    }
  }
}
