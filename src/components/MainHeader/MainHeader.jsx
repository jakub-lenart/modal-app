import React, { Component } from 'react';
import './MainHeader.css';

class MainHeader extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="container">
          <h1>Take good care of your beloved<br />car and purchase an insurance!</h1>
          <button>See more</button>
        </div>
      </header>
    );
  }
}

export default MainHeader;
