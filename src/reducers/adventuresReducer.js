const adventures = (state= [] ,action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.user.adventures
        default:
            return state
    }
}


export default adventures