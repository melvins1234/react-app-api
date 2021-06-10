import { createStore } from 'redux';

const productInfoReducer = (state = {image: '', product: '', price: '', discountedPrice: '', star: ''}, action) => {
    if(action.type === 'addToCart'){
        return {
            image: action.image,
            product: action.product,
            price: action.price,
            discountedPrice: action.discountedPrice,
            star: action.star
        }
    }
}

const store = createStore(productInfoReducer);
export default store;