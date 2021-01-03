import React from 'react'

const Product = (props) => {
    return (
        <div>
        <img src={props.src} alt={props.alt} className={props.className} width={props.width} height={props.height}/>
        </div>
    )
}

export default Product