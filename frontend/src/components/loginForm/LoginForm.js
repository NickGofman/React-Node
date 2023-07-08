import React, { useState } from 'react';
import Input from '../input/Input';
import Button from '../Button/Button';
import axios from '../../api/axios';
function LoginForm(props) {
  const handleClick = (e) => {
    e.preventDefault();

    const regexPass = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{3,8}$/;
    const regexUserName = /^[a-zA-Z]{2,}$/;

    const isPasswordValid = regexPass.test(inputs.password);
    const isUserNameValid = regexUserName.test(inputs.username);

    setErrPassword(
      isPasswordValid
        ? ''
        : 'Password must contain at least one letter, at least one digit, and consist of 3 to 8 alphanumeric characters.'
    );

    setErrUserName(
      isUserNameValid
        ? ''
        : 'Username must contain only letters and have a minimum length of 2.'
    );

    if (isPasswordValid && isUserNameValid) {
      // TODO make axios call, if status 200 activate "goToHome"
      // axios.post();

      props.goToHome();
    }
  };
  const [inputs, setInputs] = useState({ username: '', password: '' });
  const [errPassword, setErrPassword] = useState('');
  const [errUserName, setErrUserName] = useState('');

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };
  console.log(inputs);
  return (
    <form>
      <h1>Login</h1>
      <Input name="username" handleChange={handleChange} label="User Name" />
      {errUserName}
      <Input name="password" handleChange={handleChange} label="Password" />
      {errPassword}
      <Button text="Login" handleClick={handleClick} />
    </form>
  );
}

export default LoginForm;
