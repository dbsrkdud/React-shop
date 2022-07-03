import { configureStore, createSlice } from '@reduxjs/toolkit';

// useState 역할
let user = createSlice({
    name : 'user',
    initialState : 'yun'
})

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer
  }
}) 