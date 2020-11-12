import cookies from 'browser-cookies';
import { navigate } from 'hookrouter';

export const logout = () => {
  cookies.erase('access_token');
  navigate('/auth');
};