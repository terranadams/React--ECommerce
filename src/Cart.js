import React from 'react';
import './App.css';
import Product from './Product'
import CartActions from './CartActions'
import { useSelector } from 'react-redux'


function Cart() {

  const itemsList = useSelector(state => state.itemsList)
  const itemsTotalPrice = useSelector(state => state.itemsTotalPrice)

  

  const displayItems = itemsList.map((item, index) => (
      <div key={index}>{item.title}
        <p></p>
        <Product src={item.img} alt={item.title} className={item.category} width="200px" height="200px"/>
        <p>${item.price}</p>
        <CartActions item={item} index={index} quantity={item.quantity}/>
        <p></p>
      </div>
    ))
  

  return (
    <div>
      <h1>Cart Page</h1>
      <strong>Total Checkout Price: ${itemsList.length === 0 ? "0" : itemsTotalPrice.toFixed(2)}</strong>
      <ul>
        {displayItems}
      </ul>
    </div>
  );

  }
export default Cart