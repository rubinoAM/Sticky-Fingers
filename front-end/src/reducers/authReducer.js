export default (state = [], action)=>{
    console.log("Auth Reducer has been hit!")
    if ((action.type === "AUTH_ACTION") || (action.type === "LOGIN_ACTION")){
        // console.log(action.payload.data)
        return action.payload.data
    } else if(action.type === "LOGOUT"){
        return []
    }else{
        return state
    }
}
