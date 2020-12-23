import { combineReducers } from 'redux'

const numberOfItems = (state = 0, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return state + 1
        case 'REMOVE_ITEM':
            return state - 1
        default:
            return state
    }
}
const itemsTotalPrice = (state = 0, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return state + action.payload.price
        case 'REMOVE_ITEM':
            return state - action.payload.price
        default:
            return state
    }
}
const itemsList = (state = [], action) => {
    console.log(state)
    switch(action.type){
        case 'ADD_ITEM':
            return state.push(action.payload)
        default:
            return state
    }
}
// return {   state.itemsList.concat(action.payload)   }
// return {   [...state.itemsList, action.payload]  }


const reducers = combineReducers({ // We're exporting this thing which holds all our reducer functions
    numberOfItems,
    itemsTotalPrice,
    itemsList
})
export default reducers