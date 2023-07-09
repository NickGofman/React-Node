import React from 'react';
import classes from './footer.module.css';

function Footer(props) {
  return (
    <footer className={classes.footer}>
      <p>
        &copy; {new Date().getFullYear()} {props.classRoom}{' '}
        <span>Nick Gofman</span> - <span>Saar Yanckovich</span> -{' '}
        <span>Maher Kasis</span>
      </p>
    </footer>
  );
}

export default Footer;
