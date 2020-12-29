import React, { useState, useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux'

function ItemDetail({ match }) {

  useEffect(() => {
    fetchItem()
  }, [])

  const [item, setItem] = useState({})

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://my-json-server.typicode.com/tdmichaelis/json-api/products/${match.params.id}`)

    const item = await fetchItem.json()

    setItem(item)
    console.log(item)
  }

  const addItem = (item) => {
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
      <img src={item.img} alt={item.title} width="300" height="300" />
      <p>{item.description}</p>
      <button onClick={() => {//THIS (for whatever reason) has to be an arrow function...
        dispatch(addItem(item))
      }}>Add to Cart</button>
    </div>
  );

}





export default ItemDetail;