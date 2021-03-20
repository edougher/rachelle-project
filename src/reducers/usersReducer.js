const users = (state= null ,action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                id: action.user.id,
                userName: action.user.userName
            }
            case 'CURRENT_USER':
            return {
                id: action.user.id,
                userName: action.user.userName
            }
        default:
            return state
    }
}


export default users