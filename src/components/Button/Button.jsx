import React from 'react';
import Styles from './Button.css';

const Button = ({onClick, text}) => (
  <button
    className={Styles.button}
    onClick={onClick}
  >
    {text}
  </button>
);

export default Button;
