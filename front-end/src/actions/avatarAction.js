export default (avatarUrl)=>{
    console.log(avatarUrl)
    return{
        type: "AVATAR_ACTION",
        payload: avatarUrl,
    }
}