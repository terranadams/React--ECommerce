import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


// <CartActions item={item} index={index} quantity={item.quantity}>
const CartActions = (props) => {

    const [quantity, setQuantity] = useState(props.quantity)

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

    const takeAction = (event) => {
        console.log(quantity)
        if (event > quantity) {
            dispatch(addItem(thisItem))
            setQuantity(event)
            console.log(quantity)
        } else if (event < quantity) {
            dispatch(removeItem(thisItem, thisIndex))
            setQuantity(event)
            console.log(quantity)
        } else return 
    }

    return (
        <>
            <p>Quantity of Item: </p><input type='number' value={quantity} onChange={(e) => {
                takeAction(e.target.value)
            }}></input>
        </>

    )
}

export default CartActions