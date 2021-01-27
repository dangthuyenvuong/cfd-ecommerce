import { combineReducers } from 'redux'
// import cartSlice from '../redux/cartSlice.tsx----';
// import cartReducer from './cartReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer'
import userReducer from './userReducer'

import cartReducer from '../redux/cartRedux'



export default combineReducers({
    categories: categoryReducer,
    product: productReducer,
    user: userReducer,
    cart: cartReducer
    // cart: cartSlice
})