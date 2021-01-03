import React from 'react';
import './App.css';
import Product from './Product'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


function Cart() {

  const itemsList = useSelector(state => state.itemsList)

  const removeItem = (item, index) => {
    return {
      type: 'REMOVE_ITEM',
      payload: {
        title: item.title,
        index: index,
      }
    }
  }

  const dispatch = useDispatch()

  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {itemsList.map((item, index) => (
          <div key={index}>{item.title}>
            <p></p>
            <Product src={item.img} alt={item.title} className={item.category} width="200px" height="200px"/>
            <p>${item.price}</p>
            <button onClick={() => dispatch(removeItem(item, index))}>Delete Item</button>
            <p></p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Cart;