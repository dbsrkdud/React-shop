import { configureStore, createSlice } from '@reduxjs/toolkit';

import user from './store/userSlice.js';

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : "White and Black", count : 2},
        {id : 2, name : "Grey Yordan", count : 1},
    ],
    reducers : {
        addCount(state, action){
            state[action.payload].count++;
        },
        minusCount(state, action){
            state[action.payload].count--;
        }
        
    }
})

export let { addCount, minusCount } = cart.actions;

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
}) 