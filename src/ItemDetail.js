import React, { useState, useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux'

function ItemDetail({match}) {
  useEffect(() => {
    fetchItem()
  }, []) // to console.log(item), add a comma and brackets right before the last parenthesis on this line.

  const [item, setItem] = useState({})

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://my-json-server.typicode.com/tdmichaelis/json-api/products/${match.params.id}`)
    
    const item = await fetchItem.json()
    
    setItem(item)

    // console.log(item) 
  }
  
  const addToCart = (item) => {
    return {
      type: 'ADD_ITEM',
      payload: {
        title: item.title,
        img: item.img,
        price: item.price
      }
    }
  }

  const dispatch = useDispatch()// We must import the ability to dispatch info to the store.

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.img} alt={item.title} width="300" height="300"/>
      <p>{item.description}</p>
      <button onClick={dispatch(addToCart(item))}>Add to Cart</button>
    </div>
  );
 
}





export default ItemDetail;