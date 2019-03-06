export default (state = [], action)=>{
    //console.log(action.payload)
    if (action.type === "GET_FRIENDS_ACTION"){
        return action.payload.data
    }else{
        return state
    }
}