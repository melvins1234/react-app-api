export const isLoggedIn = () => {
    return {
        type: 'user-login'
    }
}

export const isLoggedOut = () => {
    return {
        type: 'user-logout'
    }
}
