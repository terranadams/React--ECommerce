import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Nav() {

  const numberOfItems = useSelector(state => state.numberOfItems)

  return (
    <nav>
        <Link className='navStyle' to='/'><strong><h1>HomePage</h1></strong></Link>
      <ul className="nav-links">
          <Link className='navStyle' to='/products'><li>Product Page</li></Link>
          <Link className='navStyle' to='/cart'><li>Cart Page ( {numberOfItems} items )</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;