import React, { useState } from 'react';

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword1Change = (e) => {
    setPassword1(e.target.value);
  };

  const handlePassword2Change = (e) => {
    setPassword2(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic with username and passwords
    const regexPass = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{3,8}$/;
    const regexUserName = /^[a-zA-Z]{2,}$/;

    const isPasswordValid = regexPass.test(password1);
    const isPasswordsMatch = password1 === password2 && password2 !== '';
    const isUserNameValid = regexUserName.test(username);

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
    setErrPasswordMatch(
      isPasswordsMatch ? '' : 'Passwords do not match. Please re-enter.'
    );

    if (isPasswordValid && isUserNameValid && isPasswordsMatch) {
      // Reset the form fields if needed
      // TODO make axios call, if status 200 activate Login Page
      props.goToLogin();
      setUsername('');
      setPassword1('');
      setPassword2('');
    }
  };
  const [errPassword, setErrPassword] = useState('');
  const [errUserName, setErrUserName] = useState('');
  const [errPasswordMatch, setErrPasswordMatch] = useState('');
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        {errUserName}
        <div>
          <label htmlFor="password1">Password:</label>
          <input
            type="password"
            id="password1"
            value={password1}
            onChange={handlePassword1Change}
          />
        </div>
        {errPassword}
        <div>
          <label htmlFor="password2">Confirm Password:</label>
          <input
            type="password"
            id="password2"
            value={password2}
            onChange={handlePassword2Change}
          />
        </div>
        {errPasswordMatch}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
