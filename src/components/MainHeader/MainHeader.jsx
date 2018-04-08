import React, { Component } from 'react';
import Styles from './MainHeader.css';

class MainHeader extends Component {
  render() {
    return (
      <header className={Styles.MainHeader}>
        <div className="container">
          <h1>Take good care of your beloved<br />car and purchase an insurance!</h1>
          <button>See more</button>
        </div>
      </header>
    );
  }
}

export default MainHeader;
