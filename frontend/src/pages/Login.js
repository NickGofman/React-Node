import React, { useState } from 'react';
import Layout from '../layout/Layout';
import AuthForm from '../components/AuthForm/AuthForm';
import styles from '../pagesStyles/login.module.css';

function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  function goToHome() {
    setIsLoggedIn(true);
  }

  function goToLogin() {
    setIsLoggedIn(false);
    setIsRegister(false);
  }
  return (
    <>
      {isLoggedIn ? (
        <Layout />
      ) : isRegister ? (
        <div className={styles.loginContainer}>
          <div className={styles.loginContent}>
            <AuthForm goToLogin={goToLogin} goToHome={goToHome} />
          </div>
        </div>
      ) : (
        <div className={styles.loginContainer}>
          <div className={styles.loginContent}>
            <AuthForm goToHome={goToHome} goToLogin={goToLogin} />
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
