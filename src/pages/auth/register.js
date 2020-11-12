import  { useState } from 'react';
import { TextField } from "@rmwc/textfield";
import { Button } from '@rmwc/button';

import useAuthForm from './authFormHooks';
import { register } from "api/user";

const Register = ({ onRegister }) => {
  const { state: formState, onChange, onError } = useAuthForm({
    phoneNumber: '',
    password: '',
    passwordAgain: ''
  });

  const [finished, setFinished] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if(!formState.phoneNumber || !formState.password) {
      return false;
    }

    if(formState.password !== formState.passwordAgain) {
      onError('Passwords mismatch');
      return false;
    }

    try {
      await register(formState);
      setFinished(true);
      setTimeout(() => {
        onRegister();
      }, 3000);
    } catch (err) {
      onError(err.data);
    }
  };

  if(finished) {
    return (
      <h3>Registration is finished. Login in a few seconds...</h3>
    )
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Sign Up</h3>
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
      <TextField
        label="Password again"
        value={formState.passwordAgain}
        onChange={onChange('passwordAgain')}
        type="password"
        required
        outlined
      />
      <Button label="SUBMIT" unelevated />
    </form>
  )
};

export default Register;