import React from 'react';
import Logo from '../assets/burgr-logo.svg';

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item">
            <Logo className="logo" />
            <h1 className="title">Burger</h1>
          </a>
        </div>
        <div className="nav-right">
          <div className="user-avatar">
            <img src="//TODO" alt="gianluca" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
