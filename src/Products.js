import React, { useState, useEffect } from 'react';
import './App.css';
import Product from './Product'

function Products() {

  useEffect(() => {
    fetchItems() 
  }, [])

  const [items, setItems] = useState([])
  
  const fetchItems = async () => {
    const data = await fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
    const items = await data.json()
    console.log(items)
    setItems(items)
  }
  
  return (
    <div>
      <h1>Product Page</h1>
      {items.map(item => (
         <div key={item.id}>{item.title}
         <Product src={item.img} alt={item.title}/>
         </div>
      ))}
    </div>
  ); 
}



export default Products;