import request from 'utils/request';
import cookies from "browser-cookies";

export const register = (data) => request.post('/register', data);

export const login = (data) => request.post('/login', data);

export const list = () => request.get('/user/list');

export const getProfile = () => request.get('/user/me');