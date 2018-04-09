import React from 'react';
import { Button } from '..';
import Styles from './MainHeader.css';

const MainHeader = ({btnAction}) => (
  <header className={Styles.MainHeader}>
    <div className="container">
      <h1>Take good care of your beloved<br />car and purchase an insurance!</h1>
      <Button
        text="See more"
        onClick={btnAction}
      />
    </div>
  </header>
)

export default MainHeader;
