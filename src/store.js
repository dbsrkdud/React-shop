import { configureStore, createSlice } from '@reduxjs/toolkit';

// useState 역할
let user = createSlice({
    name : 'user',
    initialState : 'yun'
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : "White and Black", count : 2},
        {id : 2, name : "Grey Yordan", count : 1},
    ]
})

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