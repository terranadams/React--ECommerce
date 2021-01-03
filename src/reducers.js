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
    switch(action.type){
        case 'ADD_ITEM':
            return [...state, action.payload]
        case 'REMOVE_ITEM':
            return [
                ...state.slice(0, action.payload.index),
                ...state.slice(
                  action.payload.index + 1, state.length
                )]
        default:
            return state
    }
}
// Immutability is what lets react-redux efficiently subscribe to fine-grained updates of your state. It also enables time-travel with redux-devtools
// When we dispatch, we return new versions of state that replace the original. We don't mutate the pre-existing one.
// NOT return state.push(action.payload) because it mutates state which is wrong.
// NOT return state.itemsList.concat(action.payload) because it mutates state which is wrong.

// in itemList, "return [...state, action.payload]" seems to work but issue seems to come from handler now, it adds things to the store unexpectedly.


const reducers = combineReducers({ // We're exporting this thing which holds all our reducer functions
    numberOfItems,
    itemsTotalPrice,
    itemsList
})
export default reducers