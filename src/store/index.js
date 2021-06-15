import {combineReducers} from 'redux' 

import Products from './reducers/product'
import Cart from './reducers/toCart-reducer'
import itemsInCart from './reducers/itemsInCart-reducer'

const allReducers = combineReducers({
  products: Products,
  cart: Cart,
  itemsInCart: itemsInCart
})

export default allReducers;
