export default (state = [], action)=>{
    if (action.type === "FRIENDS_INFO_ACTION"){
        return action.payload.data
    } else{
        return state
    }
}