export default (state = [], action)=>{
    console.log(action.payload)
    if (action.type === "COLLECTION_ACTION"){
        return action.payload.data
    }else{
        return state
    }
}
