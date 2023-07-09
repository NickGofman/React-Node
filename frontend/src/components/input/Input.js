import React from 'react';
import styles from './input.module.css';

function Input(props) {
  return (
    <div className={styles.inputContainer}>
      <label>{props.label}</label>
      <input
        id={props.id}
        value={props.value}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
