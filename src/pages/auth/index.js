import { useState } from 'react';
import '@rmwc/textfield/styles';

import Login from './login';
import Register from './register';
import './auth.scss';

const Auth = () => {
  const [form, setForm] = useState('login');
  const isLogin = form === 'login';

  const switchMessage = isLogin ? 'Sign Up' : 'Sign In';

  return (
    <div className="page auth-page">
      {isLogin ? <Login/> : <Register/>}
      <div className="switch-msg" onClick={() => setForm(isLogin ? 'register' : 'login')}>
        {switchMessage}
      </div>
    </div>
  );
};

export default Auth;