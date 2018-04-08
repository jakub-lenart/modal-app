import React, { Component } from 'react';
import { Button } from '..';
import Styles from './MainHeader.css';

class MainHeader extends Component {
  btnAction = () => {
    console.log('test')
  }

  render() {
    return (
      <header className={Styles.MainHeader}>
        <div className="container">
          <h1>Take good care of your beloved<br />car and purchase an insurance!</h1>
          <Button
            text="See more" 
            onClick={this.btnAction}
          />
        </div>
      </header>
    );
  }
}

export default MainHeader;
