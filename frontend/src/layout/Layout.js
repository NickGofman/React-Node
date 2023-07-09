import React, { useState } from 'react';
import Nav from '../components/nav/Nav';
import Home from '../pages/Home';
import Activities from '../pages/Activities';
import styles from './layout.module.css';
import Footer from '../components/footer/Footer';
const Layout = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  let content = null;
  if (activeLink === 'home') {
    content = <Home />;
  } else if (activeLink === 'activities') {
    content = <Activities />;
  }

  return (
    <div className={styles.layoutContainer}>
      <Nav handleLinkClick={handleLinkClick} activeLink={activeLink} />
      <main className={styles.content}>{content}</main>
      <Footer />
    </div>
  );
};

export default Layout;
