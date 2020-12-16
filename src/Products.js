import React, { useState, useEffect } from 'react';
import './App.css';
import Product from './Product'
import { Link } from 'react-router-dom'

function Products() {
  useEffect(() => {
    fetchItems() 
  }, [])

  const [items, setItems] = useState([])
  
  const fetchItems = async () => {
    const data = await fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
    const items = await data.json()
    setItems(items)
    console.log(items)
  }
  
  return (
    <div>
      <h1>Product Page</h1>
      {items.map(item => (
         <div key={item.id}>{item.title}
         <Link to={`products/${item.id}`}>
         <Product src={item.img} alt={item.title}/>
         </Link>
         </div>
      ))}
    </div>
  ); 
}



export default Products;