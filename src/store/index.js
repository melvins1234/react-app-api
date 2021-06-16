import {combineReducers} from 'redux' 

import Products from './reducers/product'
import Cart from './reducers/toCart'
import itemsInCart from './reducers/itemsInCart'
import itemsTotalInCart from './reducers/itemsTotalInCart'

const allReducers = combineReducers({
  products: Products,
  cart: Cart,
  itemsInCart: itemsInCart,
  totalPrice: itemsTotalInCart
})

export default allReducers;
