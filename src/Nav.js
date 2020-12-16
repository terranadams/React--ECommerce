import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {

  return (
    <nav>
        <Link className='navStyle' to='/'><strong><h1>Our Logo</h1></strong></Link>
      <ul className="nav-links">
          <Link className='navStyle' to='/products'><li>Product Page</li></Link>
          <Link className='navStyle' to='/cart'><li>Cart Page</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;