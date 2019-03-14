export default(state = [], action)=>{
    if(action.type === "AVATAR_ACTION"){
        let newState = {...state} //Deep copy of State
        newState.avatarUrl = action.payload.data
        return newState
    } else {
        return state
    }
}