export const loginSuccess = (user) => {
    return {
        type: 'LOGIN_SUCCESS',
        user: user
    }
}


export const currentUser = (user) => {
    return {
        type: 'CURRENT_USER',
        user: user
    }
}

export const displayAdventures = (adventures) => {
    return {
        
        type: 'DISPLAY_ADVENTURES',
        adventures: adventures
    }
}
