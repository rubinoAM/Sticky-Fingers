export default (state = [], action)=>{
    if (action.type === "TRADES_ACTION"){
        return action.payload.data
    } else{
        return state
    }
}