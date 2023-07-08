import React from 'react';

function Button(props) {
  const { handleClick } = props;

  return <button onClick={handleClick}>{props.text}</button>;
}

export default Button;
