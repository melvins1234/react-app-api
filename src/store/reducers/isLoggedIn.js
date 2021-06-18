const isLoggedIn = (state = false, action) => {
    switch (action.type) {
        case 'user-login':
            return state = true;
        default:
            return false
    }
}

export default isLoggedIn
