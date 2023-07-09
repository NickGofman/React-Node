import React from 'react';

function Button(props) {
  const { handleClick } = props;

  return (
    <button type={props.type} className={props.className} onClick={handleClick}>
      {props.text}
    </button>
  );
  
}

export default Button;
