import request from 'utils/request';

export const signIn = (phone, password) => request.post('/signin', { phone, password });

export const login = (phone, password) => request.post('/login', { phone, password });

export const list = () => request.get('/list');