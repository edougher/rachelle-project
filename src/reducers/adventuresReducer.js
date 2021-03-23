const adventures = (state= [] ,action) => {
   
    switch(action.type){
       
        case 'LOGIN_SUCCESS':
           
            return action.user.adventures
        case 'DISPLAY_ADVENTURES':
            return action.adventures
        default:
            return state
    }
}


export default adventures