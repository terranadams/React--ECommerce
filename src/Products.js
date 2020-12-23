import React, { useState, useEffect } from 'react';
import './App.css';
import Product from './Product'
import { Link } from 'react-router-dom'

function Products() {
  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([])
  const [currentItems, setCurrentItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch(`https://my-json-server.typicode.com/tdmichaelis/json-api/products`)
    const items = await data.json()
    setItems(items)
    setCurrentItems(items);
    console.log(items)
  }

  const onCategoryChange = (value) => { // This is the change handler for the filter
    if (value === 'all') {
            setCurrentItems(items)
    } else {
      let filteredItems = items.filter(item => item.category === value);
    setCurrentItems(filteredItems)
    }
  }


  return (
    <div>
      <h1>Product Page</h1>
      <select name="categories" onChange={e => onCategoryChange(e.target.value)}>
        <option value="all">All Items</option>
        <option value="headphones">Headphones</option>
        <option value="phone">Phone</option>
        <option value="tv">Television</option>
        <option value="small-appliance">Small Appliance</option>
        <option value="refrigerator">Refrigerator</option>
        <option value="watch">Watch</option>
        <option value="action-camera">Action-Camera</option>
      </select>
      {currentItems.map(item => (
        <div key={item.id}>{item.title}
          <Link to={`products/${item.id}`}>
            <Product src={item.img} alt={item.title} />
          </Link>
        </div>
      ))}
    </div>
  );
}



export default Products;