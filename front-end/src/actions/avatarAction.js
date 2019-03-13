export default (avatarUrl)=>{
    return{
        type: "AVATAR_ACTION",
        payload: avatarUrl,
    }
}