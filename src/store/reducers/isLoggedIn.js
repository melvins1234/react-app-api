const isLoggedIn = (state = false, action) => {
    switch (action.type) {
        case 'user-login':
            return state = true;
        default:
            break;
    }
}

export default isLoggedIn
