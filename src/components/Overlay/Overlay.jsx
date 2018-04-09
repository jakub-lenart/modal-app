import React from 'react';
import Styles from './Overlay.css';

const Overlay = ({onClick}) => (
  <div
    className={Styles.Overlay}
    onClick={onClick}
  ></div>
);

export default Overlay;
