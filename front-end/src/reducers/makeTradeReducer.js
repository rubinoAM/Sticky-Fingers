export default (state = [], action)=>{
    if (action.type === "MAKE_TRADE_ACTION"){
        return action.payload.data
    } else{
        return state
    }
}