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
            <img src="https://avatars2.githubusercontent.com/u/357937?v=3&s=460" alt="gianluca" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
