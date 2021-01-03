import React, { useState, useEffect } from 'react'
import './App.css';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'


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

  let width = "200px"
  let height = "200px"

  switch(item.category) {
    case 'tv':
      width = '450px'
      height = '300px'
      break
    case 'headphones':
      width = '200px'
      height = '350px'
      break
    case 'phone':
      width = '200px'
      height = '300px'
      break
    case 'action-camera':
      width = '250px'
      height = '200px'
      break
    case 'watch':
      width = '200px'
      height = '300px'
      break
    case 'refrigerator':
      width = '200px'
      height = '350px'
  }
  

  return (
    <div>
      <Link to="/products"><button className="backButton">Go Back</button></Link>
      <h1>{item.title}</h1>
      <img src={item.img} alt={item.title} width={width} height={height} />
      <p>{item.description}</p>
      <p>${item.price}</p>
      <button onClick={() => {//THIS (for whatever reason) has to be an arrow function...
        dispatch(addItem(item))
      }}>Add to Cart</button>
    </div>
  );

}





export default ItemDetail;