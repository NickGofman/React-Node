import React, { useState } from 'react';

import LoginForm from '../components/loginForm/LoginForm';
import Layout from '../layout/Layout';

import Register from './Register';
function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  function goToHome() {
    setIsLogin(true);
    console.log('isLogin', isLogin);
  }
  function goToRegister() {
    setIsRegister(true);
    setIsLogin(false);
  }
  function goToLogin() {
    setIsLogin(false);
    setIsRegister(false);
  }
  return (
    <div>
      {isLogin ? (
        <Layout />
      ) : isRegister ? (
        <Register goToLogin={goToLogin} />
      ) : (
        <>
          <LoginForm goToHome={goToHome} />
          <a href="#" onClick={goToRegister}>
            Register
          </a>
        </>
      )}
    </div>
  );
}

export default Login;
