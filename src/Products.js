import React, { useState, useEffect } from 'react';
import './App.css';

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
         <h3 key={item.id}>{item.id}</h3>
      ))}
    </div>
  ); 
}

export default Products;