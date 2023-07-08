import React from 'react';
import classes from './footer.module.css';
function Footer(props) {
  const { aaa, bbb } = classes;
  return (
    <footer className={classes.footer}>
      <p className={`${aaa} ${bbb}`}>
        &copy; {new Date().getFullYear()} {props.classRoom}
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, iure!
      </p>
    </footer>
  );
}

export default Footer;
