import {combineReducers} from 'redux' 

import Products from './reducers/product'
import Cart from './reducers/toCart-reducer'

const allReducers = combineReducers({
  products: Products,
  cart: Cart
})

export default allReducers;
