import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


// <CartActions item={item} index={index} />
const CartActions = (props) => {


    const dispatch = useDispatch()

    let thisItem = props.item
    let thisIndex = props.index
    

    const addItem = (thisItem) => {
        return {
            type: 'ADD_ITEM',
            payload: {
                title: thisItem.title,
                img: thisItem.img,
                price: thisItem.price
            }
        }
    }

    const removeItem = (item, index) => {
        return {
            type: 'REMOVE_ITEM',
            payload: {
                title: item.title,
                img: item.img,
                price: item.price,
                index: index
            }
        }
    }

    

    return (
        <>
            <p>Quantity of Item: </p>
            <button onClick={() => dispatch(removeItem(thisItem, thisIndex))}>-</button>
            <strong> {thisItem.quantity} </strong>
            <button onClick={() => dispatch(addItem(thisItem))}>+</button>
        </>

    )
}

export default CartActions