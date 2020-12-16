import React from 'react'

const Product = (props) => {
    return (
        <div>
        <img src={props.src} alt={props.alt} width="200px" height="200px"/>
        </div>
    )
}

export default Product