export default (state = [], action)=>{
    if (action.type === "COLLECTION_ACTION"){
        return action.payload.data
    } else if (action.type === "ADD_RECORD_ACTION"){
        return action.payload.data
    } else{
        return state
    }
}
