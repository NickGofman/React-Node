import React, { useState } from 'react';
import axios from 'axios';
import Input from '../input/Input';
import Button from '../Button/Button';
import styles from './authForm.module.css';

const AuthForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Perform validation based on the current form (login or register)
    if (isRegister) {
      const regexPass = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{3,8}$/;
      const regexUserName = /^[a-zA-Z]{2,}$/;

      const isPasswordValid = regexPass.test(password);
      const isPasswordsMatch =
        password === confirmPassword && confirmPassword !== '';
      const isUserNameValid = regexUserName.test(username);

      setError(
        !isUserNameValid
          ? 'Username must contain only letters and have a minimum length of 2.'
          : !isPasswordValid
          ? 'Password must contain at least one letter, at least one digit, and consist of 3 to 8 alphanumeric characters.'
          : !isPasswordsMatch
          ? 'Passwords do not match. Please re-enter.'
          : ''
      );

      if (isUserNameValid && isPasswordValid && isPasswordsMatch) {
        // Reset the form fields if needed
        setUsername('');
        setPassword('');
        setConfirmPassword('');

        // Create the user object with username and password
        const user = {
          username: username,
          password: password,
        };

        // Make an Axios POST request to register the user
        axios
          .post('/api/auth/register', user)
          .then((response) => {
            // Registration successful, activate the login page
            setIsRegister(false);

            props.goToLogin();
          })
          .catch((error) => {
            // Registration failed, handle the error
            setError(error.response.data.error);
          });
      }
    } else {
      // Check if any of the input fields are empty
      if (!username || !password) {
        setError('Please fill in all fields');
        return;
      }

      // Create the login data object with username and password
      const loginData = {
        username: username,
        password: password,
      };

      // Make an Axios POST request to the login endpoint
      axios
        .post('/api/auth/login', loginData)
        .then((response) => {
          // Login successful, activate the home page
          props.goToHome();
        })
        .catch((error) => {
          // Login failed, handle the error
          setError(error.response?.data?.error);
        });
    }
  };

  const handleToggleForm = () => {
    setIsRegister(true);
    setError('');
  };
  return (
    <div className={styles.authFormContainer}>
      {isRegister ? <h2>Register</h2> : <h2>Login</h2>}
      <form>
        <div>
          <Input
            label="Username: "
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <Input
            label="Password: "
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {isRegister && (
          <div>
            <Input
              label="Confirm Password: "
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
        )}
        <Button
        className={styles.authFormContainer}
          text={isRegister ? 'Register' : 'Login'}
          handleClick={handleClick}
        />
      </form>
      {error && <p>{error}</p>}
      {!isRegister && (
        <a href="#" onClick={handleToggleForm}>
          Register
        </a>
      )}
    </div>
  );
};

export default AuthForm;
