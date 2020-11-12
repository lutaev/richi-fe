import { useState } from 'react';
import cookies from 'browser-cookies';
import { navigate } from 'hookrouter';
import '@rmwc/textfield/styles';
import '@rmwc/button/styles';

import Login from './login';
import Register from './register';
import './auth.scss';

const Auth = () => {
  const [form, setForm] = useState('login');

  if(cookies.get('access_token')) {
    navigate('/');
    return null;
  }

  const isLogin = form === 'login';
  const switchMessage = isLogin ? 'Sign Up' : 'Sign In';

  return (
    <div className="page auth-page">
      {isLogin ? <Login/> : <Register onRegister={() => setForm('login')}/>}
      <div className="switch-msg" onClick={() => setForm(isLogin ? 'register' : 'login')}>
        {switchMessage}
      </div>
    </div>
  );
};

export default Auth;