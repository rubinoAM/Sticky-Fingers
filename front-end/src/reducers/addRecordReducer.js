export default (state = [], action)=>{
    if (action.type === "ADD_RECORD_ACTION"){
        return action.payload.data
    } else{
        return state
    }
}