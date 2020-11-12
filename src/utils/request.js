import axios from 'axios';
import cookies from 'browser-cookies';
import { navigate } from 'hookrouter';
import get from 'lodash/get';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(config => {
  config.headers.common = {
    ...config.headers.common,
    'Authorization': `Bearer ${cookies.get('access_token')}`
  };
  return config;
}, err => Promise.reject(err));

instance.interceptors.response.use(
  res => get(res, 'data', res),
  err => {
    const { response } = err;
    if (response.status === 401) {
      debugger;
      cookies.erase('access_token');
      navigate('/auth');
    }
    return Promise.reject(err.response);
  },
);

export default instance;