import { TextField } from "@rmwc/textfield";

const Login = () => {
  const onSubmit = () => {
    return false;
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Sign In</h3>
      <TextField outlined label="phone number" />
      <TextField outlined label="password" />
    </form>
  )
};

export default Login;