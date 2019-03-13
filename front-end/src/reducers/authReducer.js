export default (state = [], action)=>{
    // console.log("Auth Reducer has been hit!")
    if ((action.type === "AUTH_ACTION") || (action.type === "LOGIN_ACTION")){
        return action.payload.data
    } else if(action.type === "AVATAR_ACTION"){
        let newState = {...state} //Deep copy of State
        newState.avatarUrl = action.payload.data
        return newState
    } else if(action.type === "LOGOUT"){
        return []
    }else{
        return state
    }
}
