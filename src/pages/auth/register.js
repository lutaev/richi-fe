import { TextField } from "@rmwc/textfield";

const Register = () => {
  const onSubmit = () => {
    return false;
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Sign Up</h3>
      <TextField outlined label="phone number" />
      <TextField outlined label="password" />
      <TextField outlined label="password again" />
    </form>
  )
};

export default Register;