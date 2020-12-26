import React from 'react';
import './App.css';
import Product from './Product'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


function Cart() {

  const itemsList = useSelector(state => state.itemsList)

  const removeItem = (item) => {
    return {
      type: 'REMOVE_ITEM',
      payload: {
        title: item.title
      }
    }
  }

  const dispatch = useDispatch()

  return (
    <div>
      <h1>Cart Page</h1>
      <ul>
        {itemsList.map(item => (
          <div key={item.id}>{item.title}
            <Product src={item.img} alt={item.title} />
            <button onClick={dispatch}>Delete Item</button>
            <p></p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Cart;