import React from 'react';
import Styles from './Button.css';

const Button = ({onClick, text, type, disabled}) => (
  <button
    className={Styles.Button}
    onClick={onClick}
    type={type}
    disabled={disabled}
  >
    {text}
  </button>
);

export default Button;
