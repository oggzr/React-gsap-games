import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <header>
    <div className="logo">
    <h1>123Games</h1>
    </div>
    <div className="nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/games/balls">Balls</Link></li>
      </ul>
    </div>
  </header>
);

export default Header;
