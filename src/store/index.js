import {combineReducers} from 'redux' 

import Products from './reducers/product'
import Cart from './reducers/toCart'
import itemsInCart from './reducers/itemsInCart'
import itemsTotalInCart from './reducers/itemsTotalInCart'
import quantityAddDeduct from './reducers/quantityAddDeduct'
import addUser from './reducers/addUser'

const allReducers = combineReducers({
  products: Products,
  cart: Cart,
  itemsInCart: itemsInCart,
  totalPrice: itemsTotalInCart,
  quantity: quantityAddDeduct,
  users: addUser
})

export default allReducers;
