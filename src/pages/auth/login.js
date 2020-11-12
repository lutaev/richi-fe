import { TextField } from "@rmwc/textfield";
import { Button } from '@rmwc/button';
import cookies from 'browser-cookies';
import { navigate } from 'hookrouter';

import { login } from 'api/user';
import useAuthForm from './authFormHooks';

const Login = () => {
  const { state: formState, onChange, onError } = useAuthForm({
    phoneNumber: '',
    password: ''
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    if(!formState.phoneNumber || !formState.password) {
      return false;
    }

    try {
      const token = await login({
        phoneNumber: formState.phoneNumber,
        password: formState.password
      });
      cookies.set('access_token', token);
      navigate('/');
    } catch (err) {
      onError(err.data);
    }

    return false;
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Sign In</h3>
      {formState.error && (
        <div className="form-error">{formState.error}</div>
      )}
      <TextField
        label="Phone number"
        value={formState.phoneNumber}
        onChange={onChange('phoneNumber')}
        required
        outlined
      />
      <TextField
        label="Password"
        value={formState.password}
        onChange={onChange('password')}
        type="password"
        required
        outlined
      />
      <Button label="SUBMIT" unelevated />
    </form>
  )
};

export default Login;