import React, { useState, useEffect } from 'react';
import './App.css';

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
  
 


  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.img} alt={item.title} width="400" height="400"/>
    </div>
  );
 
}





export default ItemDetail;