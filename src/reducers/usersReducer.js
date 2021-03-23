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
        case 'ADD_USER':
            debugger
            return {
                id: action.user.id
            }
        
        default:
            return state
    }
}


export default users