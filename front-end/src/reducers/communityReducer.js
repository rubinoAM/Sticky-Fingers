export default (state = [], action)=>{
    if (action.type === "COMMUNITY_ACTION"){
        return action.payload.data
    } else{
        return state
    }
}