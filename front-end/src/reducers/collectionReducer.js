export default (state = [], action)=>{
    if (action.type === "COLLECTION_ACTION"){
        return action.payload.data
    } else{
        return state
    }
}