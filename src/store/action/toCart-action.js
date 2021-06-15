export const toCart = (value) => {
    return {
        type: 'addToCart',
        payload: value
    }
}