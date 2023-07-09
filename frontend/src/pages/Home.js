import React from 'react';
import styles from '../pagesStyles/home.module.css';
function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to Our Website</h1>
      <h2>About Us</h2>
      <div className={styles.programmer}>
        <h3>Nick</h3>
        <p>
          Nick is a talented programmer from Haifa with a passion for web
          development. He specializes in front-end technologies and loves
          creating beautiful and responsive user interfaces.
        </p>
      </div>
      <div className={styles.programmer}>
        <h3>Saar</h3>
        <p>
          Saar is a skilled programmer based in Haifa. He has expertise in both
          front-end and back-end development. Saar enjoys solving complex
          problems and building robust and scalable web applications.
        </p>
      </div>
      <div className={styles.programmer}>
        <h3>Maher</h3>
        <p>
          Maher is a talented programmer hailing from Haifa. She has a strong
          background in database management and server-side development. Maher
          is passionate about creating efficient and secure web solutions.
        </p>
      </div>
    </div>
  );
}

export default Home;
