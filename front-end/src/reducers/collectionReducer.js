export default (state = [], action)=>{
    console.log("Collection Reducer has been hit!")
    if (action.type === "COLLECTION_ACTION"){
        return action.payload.data
    }else{
        return state
    }
}
